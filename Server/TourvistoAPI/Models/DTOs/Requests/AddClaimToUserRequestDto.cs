namespace TourvistoAPI.Models.DTOs.Requests
{
    public class AddClaimToUserRequestDto
    {
        public string UserId { get; set; }
        public string ClaimType { get; set; }
        public string ClaimValue { get; set; }
    }
}
