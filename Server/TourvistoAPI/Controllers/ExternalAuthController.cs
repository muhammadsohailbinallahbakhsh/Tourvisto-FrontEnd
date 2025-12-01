using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using TourvistoAPI.Data;
using TourvistoAPI.Models;
using TourvistoAPI.Models.DTOs.Responses;

namespace TourvistoAPI.Controllers
{
    [Route("api/external")]
    [ApiController]
    public class ExternalAuthController : ControllerBase
    {
        private readonly UserManager<ThisApplicationUser> _userManager;
        private readonly SignInManager<ThisApplicationUser> _signInManager;
        private readonly ApplicationDbContext _dbContext;
        private readonly ILogger<ExternalAuthController> _logger;
        private readonly AuthManagementController _authController;
        private readonly IConfiguration _configuration;

        public ExternalAuthController(
            UserManager<ThisApplicationUser> userManager,
            SignInManager<ThisApplicationUser> signInManager,
            ApplicationDbContext dbContext,
            ILogger<ExternalAuthController> logger,
            AuthManagementController authController,
            IConfiguration configuration)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _dbContext = dbContext;
            _logger = logger;
            _authController = authController;
            _configuration = configuration;
        }

        [HttpGet("login")]
        public IActionResult ExternalLogin([FromQuery] string returnUrl, LinkGenerator linkGenerator,
    SignInManager<ThisApplicationUser> signManager, HttpContext context)
        {
            _logger.LogInformation($"=== STEP 1: External login initiated ===");
            _logger.LogInformation($"Provider: {provider}");
            _logger.LogInformation($"Return URL from frontend: {returnUrl}");

            // This creates the callback URL that Google will redirect to
            var redirectUrl = Url.Action(
                nameof(ExternalLoginCallback),
                "ExternalAuth",
                new { returnUrl },
                Request.Scheme
            );

            _logger.LogInformation($"Callback URL for Google: {redirectUrl}");

            var properties = _signInManager.ConfigureExternalAuthenticationProperties(provider, redirectUrl);

            _logger.LogInformation($"=== Redirecting to Google OAuth ===");

            return Challenge(properties, provider);
        }

        [HttpGet("signin-google")]
        public async Task<IActionResult> ExternalLoginCallback([FromQuery] string returnUrl = "/auth/callback", [FromQuery] string? remoteError = null)
        {
            _logger.LogInformation("=== STEP 2: Google callback received ===");
            _logger.LogInformation($"Return URL: {returnUrl}");

            if (remoteError != null)
            {
                _logger.LogError($"Remote error from Google: {remoteError}");
                return Redirect($"{GetFrontendUrl()}/auth/user?error={Uri.EscapeDataString(remoteError)}");
            }

            var info = await _signInManager.GetExternalLoginInfoAsync();
            if (info == null)
            {
                _logger.LogError("External login info is null - possible correlation cookie issue");
                return Redirect($"{GetFrontendUrl()}/auth/user?error=external_login_failed");
            }

            _logger.LogInformation($"Login provider: {info.LoginProvider}");
            _logger.LogInformation($"Provider key: {info.ProviderKey}");

            try
            {
                // Extract user information from Google
                var email = info.Principal.FindFirstValue(ClaimTypes.Email);
                var name = info.Principal.FindFirstValue(ClaimTypes.Name);
                var profilePicture = info.Principal.FindFirstValue("picture") ??
                                    info.Principal.FindFirstValue("urn:google:picture");

                _logger.LogInformation($"Email from Google: {email}");
                _logger.LogInformation($"Name from Google: {name}");

                if (string.IsNullOrEmpty(email))
                {
                    _logger.LogError("No email found in Google claims");
                    return Redirect($"{GetFrontendUrl()}/auth/user?error=no_email");
                }

                // Check if user already exists
                var user = await _userManager.FindByEmailAsync(email);

                if (user == null)
                {
                    _logger.LogInformation($"User not found, creating new user for: {email}");

                    // Determine role - first user is admin, rest are users
                    var allUsersCount = await _userManager.Users.CountAsync();
                    var newRole = allUsersCount == 0 ? "admin" : "user";

                    user = new ThisApplicationUser
                    {
                        UserName = email,
                        Email = email,
                        EmailConfirmed = true,
                        Role = newRole,
                        ProfileUrl = profilePicture,
                        DateJoined = DateTime.UtcNow
                    };

                    var createResult = await _userManager.CreateAsync(user);
                    if (!createResult.Succeeded)
                    {
                        _logger.LogError($"Failed to create user: {string.Join(", ", createResult.Errors.Select(e => e.Description))}");
                        return Redirect($"{GetFrontendUrl()}/auth/user?error=user_creation_failed");
                    }

                    // Assign role to user
                    var roleResult = await _userManager.AddToRoleAsync(user, newRole);
                    if (!roleResult.Succeeded)
                    {
                        _logger.LogError($"Failed to assign role: {string.Join(", ", roleResult.Errors.Select(e => e.Description))}");
                    }

                    _logger.LogInformation($"Created new user with role: {newRole}");
                }
                else
                {
                    _logger.LogInformation($"Existing user found: {email}");
                }

                // Link Google login to user account
                var existingLogin = await _userManager.FindByLoginAsync(info.LoginProvider, info.ProviderKey);
                if (existingLogin == null)
                {
                    var addLoginResult = await _userManager.AddLoginAsync(user, info);
                    if (!addLoginResult.Succeeded)
                    {
                        _logger.LogError($"Failed to link Google login: {string.Join(", ", addLoginResult.Errors.Select(e => e.Description))}");
                    }
                    else
                    {
                        _logger.LogInformation("Successfully linked Google login to user");
                    }
                }

                // Generate JWT tokens
                _logger.LogInformation("Generating JWT tokens");
                var tokenResult = await _authController.GenerateJwtToken(user);
                var userRoles = await _userManager.GetRolesAsync(user);

                var authResponse = new UserRegistrationResponse
                {
                    Success = true,
                    Token = tokenResult.Token,
                    RefreshToken = tokenResult.RefreshToken,
                    Name = user.UserName,
                    Email = user.Email,
                    Role = userRoles.FirstOrDefault() ?? user.Role
                };

                // Serialize and encode the response
                var responseJson = System.Text.Json.JsonSerializer.Serialize(authResponse);
                var encodedResponse = Uri.EscapeDataString(responseJson);

                _logger.LogInformation($"=== STEP 3: Redirecting to frontend ===");
                _logger.LogInformation($"Frontend URL: {GetFrontendUrl()}{returnUrl}");

                return Redirect($"{GetFrontendUrl()}{returnUrl}?data={encodedResponse}");
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Exception during external login callback");
                return Redirect($"{GetFrontendUrl()}/auth/user?error=authentication_failed");
            }
        }

        private string GetFrontendUrl()
        {
            var allowedOrigins = _configuration.GetSection("Cors:AllowedOrigins").Get<string[]>();
            return allowedOrigins?.FirstOrDefault() ?? "http://localhost:5173";
        }
    }
}