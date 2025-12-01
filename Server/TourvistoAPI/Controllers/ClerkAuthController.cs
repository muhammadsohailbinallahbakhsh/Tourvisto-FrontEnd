using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourvistoAPI.Data;
using TourvistoAPI.Models;
using TourvistoAPI.Models.DTOs.Responses;
using TourvistoAPI.Services;

namespace TourvistoAPI.Controllers
{
    [Route("api/clerkauth/[action]")]
    [ApiController]
    public class ClerkAuthController : ControllerBase
    {
        private readonly UserManager<ThisApplicationUser> _userManager;
        private readonly IClerkService _clerkService;
        private readonly ApplicationDbContext _dbContext;
        private readonly ILogger<ClerkAuthController> _logger;
        private readonly AuthManagementController _authController;

        public ClerkAuthController(
            UserManager<ThisApplicationUser> userManager,
            IClerkService clerkService,
            ApplicationDbContext dbContext,
            ILogger<ClerkAuthController> logger,
            AuthManagementController authController)
        {
            _userManager = userManager;
            _clerkService = clerkService;
            _dbContext = dbContext;
            _logger = logger;
            _authController = authController;
        }

        [HttpPost]
        [ActionName("Callback")]
        public async Task<IActionResult> Callback([FromBody] ClerkCallbackRequest request)
        {
            try
            {
                _logger.LogInformation("Clerk callback received");

                if (string.IsNullOrEmpty(request.UserId))
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = new List<string> { "User ID is required" }
                    });
                }

                // Get Clerk user by ID
                ClerkUser? clerkUser = await _clerkService.GetUserById(request.UserId);

                if (clerkUser == null)
                {
                    _logger.LogWarning($"Clerk user not found for ID: {request.UserId}");
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = new List<string> { "Invalid Clerk user" }
                    });
                }

                var email = clerkUser.GetPrimaryEmail();
                if (string.IsNullOrEmpty(email))
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = new List<string> { "No email address found" }
                    });
                }

                _logger.LogInformation($"Processing authentication for email: {email}");

                // Find or create user
                var existingUser = await _userManager.FindByEmailAsync(email);

                if (existingUser == null)
                {
                    var allUsersCount = await _userManager.Users.CountAsync();
                    var newRole = allUsersCount == 0 ? "admin" : "user";

                    var newUser = new ThisApplicationUser
                    {
                        Email = email,
                        UserName = email,
                        Role = newRole,
                        ProfileUrl = clerkUser.GetProfileImage(),
                        DateJoined = DateTime.UtcNow,
                        EmailConfirmed = true
                    };

                    var result = await _userManager.CreateAsync(newUser);

                    if (!result.Succeeded)
                    {
                        _logger.LogError($"Failed to create user: {string.Join(", ", result.Errors.Select(e => e.Description))}");
                        return BadRequest(new UserRegistrationResponse
                        {
                            Success = false,
                            Errors = result.Errors.Select(e => e.Description).ToList()
                        });
                    }

                    await _userManager.AddToRoleAsync(newUser, newRole);
                    existingUser = newUser;
                    _logger.LogInformation($"Created new user with email: {email}");
                }

                // Generate JWT tokens
                var tokenResult = await _authController.GenerateJwtToken(existingUser);
                var userRoles = await _userManager.GetRolesAsync(existingUser);

                _logger.LogInformation($"Successfully authenticated user: {email}");

                return Ok(new UserRegistrationResponse
                {
                    Success = true,
                    Token = tokenResult.Token,
                    RefreshToken = tokenResult.RefreshToken,
                    Name = existingUser.UserName,
                    Email = existingUser.Email,
                    Role = userRoles.FirstOrDefault() ?? existingUser.Role
                });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error during Clerk authentication");
                return StatusCode(500, new UserRegistrationResponse
                {
                    Success = false,
                    Errors = new List<string> { "Authentication failed", ex.Message }
                });
            }
        }
    }

    public class ClerkCallbackRequest
    {
        public string UserId { get; set; } = string.Empty;
    }
}