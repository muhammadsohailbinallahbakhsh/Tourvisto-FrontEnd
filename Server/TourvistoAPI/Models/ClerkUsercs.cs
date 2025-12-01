using System.Text.Json.Serialization;

namespace TourvistoAPI.Models
{
    public class ClerkUser
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [JsonPropertyName("email_addresses")]
        public List<ClerkEmailAddress> EmailAddresses { get; set; } = new();

        [JsonPropertyName("image_url")]
        public string? ImageUrl { get; set; }

        [JsonPropertyName("first_name")]
        public string? FirstName { get; set; }

        [JsonPropertyName("last_name")]
        public string? LastName { get; set; }

        public string GetPrimaryEmail()
        {
            return EmailAddresses
                .FirstOrDefault(e => e.Id == EmailAddresses.FirstOrDefault()?.Id)
                ?.EmailAddress ?? string.Empty;
        }

        public string GetProfileImage()
        {
            return ImageUrl ?? string.Empty;
        }
    }

    public class ClerkEmailAddress
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [JsonPropertyName("email_address")]
        public string EmailAddress { get; set; } = string.Empty;

        [JsonPropertyName("verification")]
        public ClerkVerification? Verification { get; set; }
    }

    public class ClerkVerification
    {
        [JsonPropertyName("status")]
        public string Status { get; set; } = string.Empty;
    }

    public class ClerkSession
    {
        [JsonPropertyName("id")]
        public string Id { get; set; } = string.Empty;

        [JsonPropertyName("user_id")]
        public string UserId { get; set; } = string.Empty;

        [JsonPropertyName("status")]
        public string Status { get; set; } = string.Empty;
    }
}