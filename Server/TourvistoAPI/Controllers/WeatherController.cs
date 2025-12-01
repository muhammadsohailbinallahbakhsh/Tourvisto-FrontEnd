// Controllers/WeatherController.cs
using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class WeatherController : ControllerBase
{
    [HttpGet]
    public IActionResult GetWeather()
    {
        var weather = new[]
        {
            new { Date = DateTime.Now, Temperature = 25, Summary = "Sunny" },
            new { Date = DateTime.Now.AddDays(1), Temperature = 22, Summary = "Cloudy" }
        };

        return Ok(weather);
    }
    [HttpPost]
    public IActionResult CreateWeatherReport([FromBody] WeatherRequest request)
    {
        // Process the request
        return Ok(new { Message = "Weather report created", Data = request });
    }
}

public class WeatherRequest
{
    public DateTime Date { get; set; }
    public int Temperature { get; set; }
    public string Summary { get; set; } = string.Empty;
}