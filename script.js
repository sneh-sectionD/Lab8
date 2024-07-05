document.getElementById('fetch-weather').addEventListener('click', fetchWeather);

async function fetchWeather() {
    const city = document.getElementById('city-input').value;
    const apiKey = '69fd665707349fa7753f2bc5baabd1ef';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            displayWeather(data);
        } else {
            displayError(data.message);
        }
    } catch (error) {
        displayError('An error occurred while fetching the data.');
    }
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-data');
    weatherContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity} %</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function displayError(message) {
    const weatherContainer = document.getElementById('weather-data');
    weatherContainer.innerHTML = `<p>${message}</p>`;
}
