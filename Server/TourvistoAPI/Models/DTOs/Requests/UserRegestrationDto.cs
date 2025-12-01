using System.ComponentModel.DataAnnotations;

namespace TourvistoAPI.Models.DTOs.Requests
{
    public class UserRegestrationDto
    {
        public string Name { get; set; } = "";
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }

        [MaxLength(500)]
        public string? ProfileUrl { get; set; }
    }
}
