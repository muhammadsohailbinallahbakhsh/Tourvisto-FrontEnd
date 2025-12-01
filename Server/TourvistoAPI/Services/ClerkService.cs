using Microsoft.Extensions.Options;
using System.Net.Http.Headers;
using System.Text.Json;
using TourvistoAPI.Configurations;
using TourvistoAPI.Models;

namespace TourvistoAPI.Services
{
    public interface IClerkService
    {
        Task<ClerkUser?> GetUserById(string userId);
        Task<ClerkUser?> VerifyToken(string token);
    }

    public class ClerkService : IClerkService
    {
        private readonly HttpClient _httpClient;
        private readonly ILogger<ClerkService> _logger;
        private readonly ClerkConfig _clerkConfig;

        public ClerkService(
            IHttpClientFactory httpClientFactory,
            ILogger<ClerkService> logger,
            IOptions<ClerkConfig> clerkConfig)
        {
            _httpClient = httpClientFactory.CreateClient("ClerkClient");
            _logger = logger;
            _clerkConfig = clerkConfig.Value;
        }

        public async Task<ClerkUser?> GetUserById(string userId)
        {
            try
            {
                var response = await _httpClient.GetAsync($"users/{userId}");

                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogError($"Failed to get user from Clerk. Status: {response.StatusCode}");
                    return null;
                }

                var content = await response.Content.ReadAsStringAsync();
                var user = JsonSerializer.Deserialize<ClerkUser>(content, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                return user;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error getting user from Clerk");
                return null;
            }
        }

        public async Task<ClerkUser?> VerifyToken(string token)
        {
            try
            {
                // Verify the session token with Clerk
                var request = new HttpRequestMessage(HttpMethod.Get, $"sessions/{token}");
                var response = await _httpClient.SendAsync(request);

                if (!response.IsSuccessStatusCode)
                {
                    _logger.LogError($"Failed to verify token. Status: {response.StatusCode}");
                    return null;
                }

                var content = await response.Content.ReadAsStringAsync();
                var session = JsonSerializer.Deserialize<ClerkSession>(content, new JsonSerializerOptions
                {
                    PropertyNameCaseInsensitive = true
                });

                if (session?.UserId == null)
                {
                    return null;
                }

                // Get the full user details
                return await GetUserById(session.UserId);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error verifying token with Clerk");
                return null;
            }
        }
    }
}