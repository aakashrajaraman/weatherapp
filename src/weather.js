import { useState } from 'react';
import './weather.css';

function WeatherApp() {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    const apiKey = '828b5c16d63f6c2ca6a33524e780d7ba';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=828b5c16d63f6c2ca6a33524e780d7ba`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    setWeatherData(data);
  }

  return (
    <div className="body">
    <form onSubmit={handleSubmit}>
      <label>
        Enter a Location
      </label>
      <input type="text" value={location} onChange={(event) => setLocation(event.target.value)} />
      <button type="submit">Get Weather</button>
    </form>
    {weatherData && (
    <div className="Location">
        <p>{weatherData.name}: {weatherData.weather[0].description}</p>
    </div>
    )}
    
    {weatherData && (
        
      <div className="weather-data">
        
        <div className="weather-info">
          <p>Temperature: {weatherData.main.temp.toFixed()}°C</p>
        </div>
        <div className="weather-info">
          <p>Feels Like: {weatherData.main.feels_like.toFixed()}°C</p>
        </div>
        <div className="weather-info">
          <p>Visibility: {weatherData.visibility} meters</p>
        </div>
        <div className="weather-info">
          <p>Humidity: {weatherData.main.humidity}%</p>
        </div>
      </div>
    )}
  </div>
  );
}

export default WeatherApp;
