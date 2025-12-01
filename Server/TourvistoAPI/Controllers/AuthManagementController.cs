using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using TourvistoAPI.Configurations;
using TourvistoAPI.Data;
using TourvistoAPI.Models;
using TourvistoAPI.Models.DTOs.Requests;
using TourvistoAPI.Models.DTOs.Responses;

namespace TourvistoAPI.Controllers
{
    [Route("api/authmanagement/[action]")]
    [ApiController]
    public class AuthManagementController : ControllerBase
    {
        private readonly UserManager<ThisApplicationUser> _userManager;
        private readonly JwtConfig _jwtConfig;
        private readonly TokenValidationParameters _tokenValidationParameters;
        private readonly ApplicationDbContext _dbContext;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger<AuthManagementController> _logger;

        public AuthManagementController(UserManager<ThisApplicationUser> userManager, IOptionsMonitor<JwtConfig> optionsMonitor, TokenValidationParameters tokenValidationParameters, ApplicationDbContext dbContext, RoleManager<IdentityRole> roleManager, ILogger<AuthManagementController> logger)
        {
            _userManager = userManager;
            _jwtConfig = optionsMonitor.CurrentValue;
            _tokenValidationParameters = tokenValidationParameters;
            _dbContext = dbContext;
            _roleManager = roleManager;
            _logger = logger;
        }

        [HttpPost]
        [ActionName("Register")]
        public async Task<IActionResult> Register([FromBody] UserRegestrationDto userRegestrationDto)
        {
            try
            {
                if (userRegestrationDto == null || !ModelState.IsValid)
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = new List<string> { "Invalid payload" }
                    });
                }

                var existingUser = await _userManager.FindByEmailAsync(userRegestrationDto.Email);
                if (existingUser != null)
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = new List<string> { "Email already in use" }
                    });
                }

                var allUsersCount = await _userManager.Users.CountAsync();
                var newRole = allUsersCount == 0 ? "admin" : "user"; 

                var newUser = new ThisApplicationUser()
                {
                    Email = userRegestrationDto.Email,
                    Role = newRole,
                    ProfileUrl = userRegestrationDto.ProfileUrl,
                    DateJoined = DateTime.UtcNow,
                    UserName = userRegestrationDto.Email 
                };
                
                var isCreated = await _userManager.CreateAsync(newUser, userRegestrationDto.Password);
                if (!isCreated.Succeeded)
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = isCreated.Errors.Select(x => x.Description).ToList()
                    });
                }
                
                var roleResult = await _userManager.AddToRoleAsync(newUser, newRole);
                if (!roleResult.Succeeded)
                {
                    return BadRequest(new UserRegistrationResponse
                    {
                        Success = false,
                        Errors = roleResult.Errors.Select(x => x.Description).ToList()
                    });
                }

                // Generate JWT token
                var tokenResult = await GenerateJwtToken(newUser);

                // Get user roles (should have the role we just added)
                var userRoles = await _userManager.GetRolesAsync(newUser);

                var authResponse = new UserRegistrationResponse
                {
                    Success = tokenResult.Success,
                    Token = tokenResult.Token,
                    RefreshToken = tokenResult.RefreshToken,
                    Name = newUser.UserName,
                    Email = newUser.Email,
                    Role = userRoles.FirstOrDefault() ?? newRole, // Use FirstOrDefault for safety
                };

                return Ok(authResponse);
            }
            catch (Exception ex)
            {
                return StatusCode(500, new UserRegistrationResponse
                {
                    Success = false,
                    Errors = new List<string> { "An error occurred during registration. Please try again." }
                });
            }
        }


        public async Task<List<Claim>> GetAllValidClaims(ThisApplicationUser user)
        {
            var _options = new IdentityOptions();
            var claims = new List<Claim>
            {
                    new Claim("Id", user.Id),
                    new Claim(JwtRegisteredClaimNames.Sub, user.Email!),
                    new Claim(JwtRegisteredClaimNames.Email, user.Email!),
                    new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
            };
            var userClaims = await _userManager.GetClaimsAsync(user);
            claims.AddRange(userClaims);
            var userRoles = await _userManager.GetRolesAsync(user);

            foreach (var userRole in userRoles)
            {
                var role = await _roleManager.FindByNameAsync(userRole);
                if (role != null)
                {
                    claims.Add(new Claim(ClaimTypes.Role, userRole));
                    var roleClaims = await _roleManager.GetClaimsAsync(role);
                    foreach (var roleClaim in roleClaims)
                    {
                        if (!claims.Contains(roleClaim))
                            claims.Add(roleClaim);
                    }
                }
            }
            return claims;
        }


        public async Task<AuthResult> GenerateJwtToken(ThisApplicationUser user)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtConfig.JwtSecret);

            var claims = await GetAllValidClaims(user);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(claims),
                Expires = DateTime.UtcNow.AddSeconds(30), // 5 - 10 minutes in production
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = jwtTokenHandler.CreateToken(tokenDescriptor);

            var refreshToken = new RefreshToken
            {
                JwtId = token.Id,
                IsUsed = false,
                IsRevorked = false,
                UserId = user.Id,
                AddedDate = DateTime.UtcNow,
                ExpiryDate = DateTime.UtcNow.AddSeconds(20),
                Token = RandomString(35) + Guid.NewGuid()
            };

            await _dbContext.Set<RefreshToken>().AddAsync(refreshToken);
            await _dbContext.SaveChangesAsync();

            return new AuthResult
            {
                Token = jwtTokenHandler.WriteToken(token),
                Success = true,
                RefreshToken = refreshToken.Token
            };
        }


        private static string RandomString(int length)
        {
            var random = new Random();
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
            return new string(Enumerable.Repeat(chars, length)
              .Select(s => s[random.Next(s.Length)]).ToArray());
        }


        [HttpPost]
        [ActionName("Login")]
        public async Task<IActionResult> Login([FromBody] UserLoginRequestDto UserLoginRequestDto)
        {
            if (UserLoginRequestDto == null || !ModelState.IsValid)
            {
                return BadRequest(new UserRegistrationResponse
                {
                    Success = false,
                    Errors = new List<string> { "Invalid payload" }
                });
            }
            var existingUser = await _userManager.FindByEmailAsync(UserLoginRequestDto.Email);
            if (existingUser == null)
            {
                return BadRequest(new UserRegistrationResponse
                {
                    Success = false,
                    Errors = new List<string> { "Invalid authentication request" }
                });
            }
            var isCorrect = await _userManager.CheckPasswordAsync(existingUser, UserLoginRequestDto.Password);
            if (!isCorrect)
            {
                return BadRequest(new UserRegistrationResponse
                {
                    Success = false,
                    Errors = new List<string> { "Invalid authentication request" }
                });
            }

            var tokenResponse = await GenerateJwtToken(existingUser);
            var thisUser = await _userManager.FindByEmailAsync(UserLoginRequestDto.Email);
            var authResponse = new UserRegistrationResponse
            {
                Success = tokenResponse.Success,
                Token = tokenResponse.Token,
                RefreshToken = tokenResponse.RefreshToken,
                Name = thisUser.UserName,
                Email = thisUser.Email,
                Role = thisUser.Role,
            };
            return Ok(authResponse);
        }
        
        [HttpPost]
        [ActionName("RefreshToken")]
        public async Task<IActionResult> RefreshToken([FromBody] TokenRequestDto tokenRequest)
        {
            if (ModelState.IsValid)
            {
                var result = await VerifyToken(tokenRequest);
                if (result == null)
                {
                    return BadRequest(new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Invalid tokens" }
                    });
                }

                return Ok(result);
            }

            return BadRequest(new AuthResult()
            {
                Success = false,
                Errors = new List<string>() { "Invalid payload" }
            });
        }

        private async Task<ActionResult<AuthResult>> VerifyToken(TokenRequestDto tokenRequest)
        {
            var jwtTokenHandler = new JwtSecurityTokenHandler();

            try
            {
                // Validation 1 - Validate JWT token format
                var tokenInVerification = jwtTokenHandler.ValidateToken(tokenRequest.Token, _tokenValidationParameters, out var validatedToken);

                // Validation 2 - Validate encryption algorithm
                if (validatedToken is JwtSecurityToken jwtSecurityToken)
                {
                    var result = jwtSecurityToken.Header.Alg.Equals(SecurityAlgorithms.HmacSha256, StringComparison.InvariantCultureIgnoreCase);
                    if (!result)
                    {
                        return new AuthResult()
                        {
                            Success = false,
                            Errors = new List<string>() { "Invalid token encryption" }
                        };
                    }
                }

                // Validation 3 - validate expiry date
                var utcExpiryDate = long.Parse(tokenInVerification?.Claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Exp)?.Value);
                var expiryDate = UnixTimeStampToDateTime(utcExpiryDate);

                if (expiryDate > DateTime.UtcNow)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Token has not expired yet" }
                    };
                }

                // Validation 4 - validate existence of the token
                var storedToken = await _dbContext.Set<RefreshToken>().FirstOrDefaultAsync(x => x.Token == tokenRequest.RefreshToken);
                if (storedToken == null)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Refresh token does not exist" }
                    };
                }

                // Validation 5 - validate if token is used
                if (storedToken.IsUsed)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Refresh token has been used" }
                    };
                }

                // Validation 6 - validate if token is revoked
                if (storedToken.IsRevorked)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Refresh token has been revoked" }
                    };
                }

                // Validation 7 - validate the token id
                var jti = tokenInVerification?.Claims?.FirstOrDefault(x => x.Type == JwtRegisteredClaimNames.Jti)?.Value;
                if (storedToken.JwtId != jti)
                {
                    return new AuthResult()
                    {
                        Success = false,
                        Errors = new List<string>() { "Token doesn't match" }
                    };
                }

                // Update current token
                storedToken.IsUsed = true;
                _dbContext.Set<RefreshToken>().Update(storedToken);
                await _dbContext.SaveChangesAsync();

                // Generate a new token
                ThisApplicationUser dbUser = (await _userManager.FindByIdAsync(storedToken.UserId));
                return await GenerateJwtToken(dbUser);
            }
            catch (Exception ex)
            {
                return new AuthResult()
                {
                    Success = false,
                    Errors = new List<string>() { "Server error", ex.Message }
                };
            }
        }

        private DateTime UnixTimeStampToDateTime(long unixTimeStamp)
        {
            var dateTimeVal = new DateTime(1970, 1, 1, 0, 0, 0, 0, DateTimeKind.Utc);
            dateTimeVal = dateTimeVal.AddSeconds(unixTimeStamp);
            return dateTimeVal;
        }
    }
}
