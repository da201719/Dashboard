// Clock
function updateClock() {
    const clock = document.getElementById('clock');
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Weather (manual location example)
const weatherDiv = document.getElementById('weather');
// Replace with your own API or static text
weatherDiv.textContent = "City, XX°C, Clear Sky";

// You can add dynamic weather with OpenWeatherMap API like this:
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY&units=metric`)
//   .then(response => response.json())
//   .then(data => {
//      weatherDiv.textContent = `${data.name}, ${data.main.temp}°C, ${data.weather[0].description}`;
//   });