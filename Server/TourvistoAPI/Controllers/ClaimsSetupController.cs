using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using TourvistoAPI.Data;
using TourvistoAPI.Models;
using TourvistoAPI.Models.DTOs.Requests;

namespace TourvistoAPI.Controllers
{

    [Route("api/claimssetup/[action]")]
    [ApiController]
    public class ClaimsSetupController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<ThisApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger<ClaimsSetupController> _logger;

        public ClaimsSetupController(ApplicationDbContext dbContext, UserManager<ThisApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ILogger<ClaimsSetupController> logger)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _logger = logger;
        }


        [HttpGet]
        [ActionName("GetAllClaims")]
        public async Task<IActionResult> GetAllClaims([FromQuery] string userId)
        {
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound($"User does not exist with ID: {userId}");
            }

            var claims = await _userManager.GetClaimsAsync(user);
            return Ok(claims);
        }

        [HttpPost]
        [ActionName("AddClaimToUser")]
        public async Task<IActionResult> AddClaimToUser([FromBody] AddClaimToUserRequestDto addClaimToUserRequestDto)
        {
            var user = await _userManager.FindByIdAsync(addClaimToUserRequestDto.UserId);
            if (user == null)
            {
                return NotFound($"User does not exist with ID: {addClaimToUserRequestDto.UserId}");
            }
            var claim = new Claim(addClaimToUserRequestDto.ClaimType, addClaimToUserRequestDto.ClaimValue);
            var result = await _userManager.AddClaimAsync(user, claim);
            if (result.Succeeded)
            {
                return Ok("Claim added successfully.");
            }
            else
            {
                _logger.LogError("Error adding claim: {Errors}", string.Join(", ", result.Errors.Select(e => e.Description)));
                return StatusCode(500, "Internal server error while adding claim.");
            }
        }
    }
}
