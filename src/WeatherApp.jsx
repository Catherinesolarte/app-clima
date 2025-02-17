import { useState } from "react";
import "./WeatherApp.css";

export const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "YOUR_API_KEY";
  const difKelvin = 273.15; // Para lograr obtener grados Celsius debemos restar este número a los grados Kelvin

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        `${urlBase}?q=${city}&appid=${API_KEY}&lang=es`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
      } else {
        setWeatherData(null);
        console.error(`Error ${response.status}: ${data.message}`);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className="container">
      <h1>Aplicación de Clima</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleCityChange}
          placeholder="Ingresa una ciudad"
        />
        <button type="submit">Buscar</button>
      </form>
      {weatherData && weatherData.main && weatherData.weather ? (
        <div>
          <h2>
            {weatherData.name}, {weatherData.sys?.country}
          </h2>
          <p>Temperatura: {parseInt(weatherData.main.temp - difKelvin)}°C</p>
          <p>Condición: {weatherData.weather[0]?.description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
            alt="Weather Icon"
          />
        </div>
      ) : (
        <p>Desarrollado por CatherineDev.</p>
      )}
    </div>
  );
};
