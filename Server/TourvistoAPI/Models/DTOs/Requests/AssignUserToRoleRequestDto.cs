namespace TourvistoAPI.Models.DTOs.Requests
{
    public class AssignUserToRoleRequestDto
    {
        public string UserId { get; set; }
        public string RoleName { get; set; }
        public string UserEmail { get; set; } = string.Empty;
    }
}
