using Microsoft.AspNetCore.Identity;
using System.ComponentModel.DataAnnotations;
using static TourvistoAPI.AppCode.AppConstants;

namespace TourvistoAPI.Models
{
    public class ThisApplicationUser : IdentityUser
    {
        [Required]
        public string Role { get; set; }
        [MaxLength(500)]
        public string? ProfileUrl { get; set; }
        [Required]
        public DateTime DateJoined { get; set; } = DateTime.UtcNow;
    }
}
