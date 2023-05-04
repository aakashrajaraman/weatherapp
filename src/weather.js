import { useState } from 'react';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const apiKey = '828b5c16d63f6c2ca6a33524e780d7ba';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=828b5c16d63f6c2ca6a33524e780d7ba`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter a location:
          <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
        </label>
        <button type="submit">Get Weather</button>
      </form>
      {weatherData && (
        <div>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
