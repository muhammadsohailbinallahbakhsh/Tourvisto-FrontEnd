using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TourvistoAPI.Data;
using TourvistoAPI.Models;
using TourvistoAPI.Models.DTOs.Requests;

namespace TourvistoAPI.Controllers
{

    [Route("api/setup/[action]")]
    [ApiController]
    public class SetupController : ControllerBase
    {
        private readonly ApplicationDbContext _dbContext;
        private readonly UserManager<ThisApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly ILogger<SetupController> _logger;

        public SetupController(ApplicationDbContext dbContext, UserManager<ThisApplicationUser> userManager, RoleManager<IdentityRole> roleManager, ILogger<SetupController> logger)
        {
            _dbContext = dbContext;
            _userManager = userManager;
            _roleManager = roleManager;
            _logger = logger;
        }

        [HttpGet]
        [ActionName("GetAllRoles")]
        public async Task<IActionResult> GetAllRoles()
        {
            var roles = await _roleManager.Roles.ToListAsync();
            return Ok(roles);
        }

        [HttpPost]
        [ActionName("CreateRole")]
        public async Task<IActionResult> CreateRole([FromBody] string roleName)
        {
            if (string.IsNullOrWhiteSpace(roleName))
            {
                return BadRequest("Role name cannot be empty.");
            }
            var roleExists = await _roleManager.RoleExistsAsync(roleName);
            if (roleExists)
            {
                return Conflict("Role already exists.");
            }
            var result = await _roleManager.CreateAsync(new IdentityRole(roleName));
            if (result.Succeeded)
            {
                return Ok("Role created successfully.");
            }
            else
            {
                _logger.LogError("Error creating role: {Errors}", string.Join(", ", result.Errors.Select(e => e.Description)));
                return StatusCode(500, "Internal server error while creating role.");
            }
        }

        [HttpGet]
        [ActionName("GetAllUsers")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _userManager.Users.ToListAsync();
            return Ok(users);
        }

        [HttpPost]
        [ActionName("AsignRoleToUser")]
        public async Task<IActionResult> AsignRoleToUser([FromBody] AssignUserToRoleRequestDto model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.UserId) || string.IsNullOrWhiteSpace(model.RoleName))
            {
                return BadRequest("Invalid user ID or role name.");
            }
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            var roleExists = await _roleManager.RoleExistsAsync(model.RoleName);
            if (!roleExists)
            {
                return NotFound("Role not found.");
            }
            var result = await _userManager.AddToRoleAsync(user, model.RoleName);
            if (result.Succeeded)
            {
                return Ok("Role assigned to user successfully.");
            }
            else
            {
                _logger.LogError("Error assigning role to user: {Errors}", string.Join(", ", result.Errors.Select(e => e.Description)));
                return StatusCode(500, "Internal server error while assigning role to user.");
            }
        }

        [HttpGet]
        [ActionName("GetUserRoles")]
        public async Task<IActionResult> GetUserRoles([FromQuery] string userId)
        {
            if (string.IsNullOrWhiteSpace(userId))
            {
                return BadRequest("User ID cannot be empty.");
            }
            var user = await _userManager.FindByIdAsync(userId);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            var roles = await _userManager.GetRolesAsync(user);
            return Ok(roles);
        }

        [HttpPost]
        [ActionName("RemoveUserFromRole")]
        public async Task<IActionResult> RemoveUserFromRole([FromBody] AssignUserToRoleRequestDto model)
        {
            if (model == null || string.IsNullOrWhiteSpace(model.UserId) || string.IsNullOrWhiteSpace(model.RoleName))
            {
                return BadRequest("Invalid user ID or role name.");
            }
            var user = await _userManager.FindByIdAsync(model.UserId);
            if (user == null)
            {
                return NotFound("User not found.");
            }
            var roleExists = await _roleManager.RoleExistsAsync(model.RoleName);
            if (!roleExists)
            {
                return NotFound("Role not found.");
            }
            var result = await _userManager.RemoveFromRoleAsync(user, model.RoleName);
            if (result.Succeeded)
            {
                return Ok("Role removed from user successfully.");
            }
            else
            {
                _logger.LogError("Error removing role from user: {Errors}", string.Join(", ", result.Errors.Select(e => e.Description)));
                return StatusCode(500, "Internal server error while removing role from user.");
            }
        }

    }
}
