document
  .getElementById("cityInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      searchWeather();
    }
  });

function searchWeather() {
  const city = document.getElementById("cityInput").value;
  if (!city) return;

  // Replace with your actual API key from OpenWeatherMap
  const apiKey = "6df3c5f6cd11c8ab4006f03f9e8f8dc5"; // You need to get your API key from OpenWeatherMap
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        alert("City not found!");
        return;
      }

      // Update weather details on the page
      document.getElementById("city").textContent = data.name;
      document.getElementById(
        "temperature"
      ).textContent = `Temperature: ${data.main.temp} °C`;
      document.getElementById(
        "condition"
      ).textContent = `Condition: ${data.weather[0].description}`;
      document.getElementById(
        "humidity"
      ).textContent = `Humidity: ${data.main.humidity}%`;
      document.getElementById(
        "wind"
      ).textContent = `Wind Speed: ${data.wind.speed} km/h`;

      document.getElementById("cityInput").value = ""; // Clear the input field after search
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
      alert("An error occurred while fetching the weather data.");
    });
}
