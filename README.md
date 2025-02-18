🌦️ Aplicación del Clima en React 🌤️ Echale un vistazo: 👀 https://appclimacathedev.netlify.app/
🚀 Tutorial: Crear una Aplicación del Clima con React
¡Bienvenido al tutorial para crear una aplicación del clima utiliz¡ Reacciona !OpenWeatherMap para obtener

¡Vamos a empezar! 👨‍

🔧 Requisitos
Antes

Node.js y NPMinstalado
Una clave de API de OpenWeatherMap para
Puedeshttps://openwe. 💻

Instrucciones de instalación
1. Clona el repositorio
Ejecuta este comando en tu terminal para clonar el repositorio:

git clone https://github.com/Catherinesolarte/weather-app-react.git

2. Instalar las dependencias
npm install

3. Ejecutar el proyecto

npm start

📦 Estructura del Proyecto

1. Configuración inicial: Asegúrate de tener un proyecto de React con los archivos necesarios en tu repositorio. También necesitarás importar los siguientes módulos y archivos en tu componente principal:

import { useState, useEffect } from 'react';
import './styles/weatherStyles.css';

2. Inicialización del Estado: Dentro del componente WeatherApp, defiuseState

const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState('');

WeatherData : Guarda la información del clima que obtenemos de la API.
ciudad : Guarda el nombre de la ciudad ingresada por el usuario

3. Definición de Variables y Constantes: Defina algunas variables necesarias para interactuar con la API;

let urlBase = 'https://api.openweathermap.org/data/2.5/weather';
let api_key = 'YOUR_API_KEY';  // ¡Reemplaza con tu propia clave!
let difKelvin = 273.15;

urlBase : URL base de la API.
api_key : Tu clave de API de OpenWeatherMap (reemplázala por la tuya).
difKelvin : Constante para convertir las temperaturas de Kelvin a Celsius.

4. Obtención de Datos del Clima, Defina la función fetchWeatherDatapara obtener los datos del clima desde la API:

const fetchWeatherData = async () => {
    try {
        const response = await fetch(`${urlBase}?q=${city}&appid=${api_key}`);
        const data = await response.json();
        setWeatherData(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
};

Esta función realiza una solicitud a la API y actualiza el estado weatherDatacon los datos obtenido

5. Gestión de eventos; Defina dos funciones para manejar los eventos en la aplicación:

Cambio de Ciudad : Actualiza el estado citycon el valor ingresado por el usuario.

const handleCityChange = (e) => { setCity(e.target.value); };

Envío del Formulario : Obtiene los datos del clima cuando el formulario es enviado.
const handleSubmit = (e) => { e.preventDefault(); fetchWeatherData(); };

6. Renderizado de la Aplicación; Finalmente, renderiza la interfaz de la aplicación dentro de WeatherApp:

return (
    <div className="container">
        <h1>🌦️ Aplicación del Clima</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" value={city} onChange={handleCityChange} placeholder="Ingresa una ciudad" />
            <button type="submit">Buscar</button>
        </form>
        {weatherData && (
            <div>
                <h2>{weatherData.name}</h2>
                <p>🌡️ Temperatura: {parseInt(weatherData.main?.temp - difKelvin)}°C</p>
                <p>🌤️ Condición: {weatherData.weather[0]?.description}</p>
                <img src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Icon" />
            </div>
        )}
    </div>
);

El título muestra "🌦️ Aplicación del Clima".
Se muestra un formulario con un campo para la ciudad y un botón para enviar.
Si los datos están disponibles en weatherData, se muestran:
El nombre de la ciudad.
La temperatura (convertida de Kelvin a Celsius).
La condición del clima. 🌤️
Un ícono que representa el clima.
🔑 Recuerda:
¡Reemplaza 'YOUR_API_KEY'con tu clave de API de OpenWeatherMap! 🔑
¡Ahora ya puedes disfrutar de la aplicación y ver el clima de cualquier ciudad! 🌍
🌟 ¡Haz que tu aplicación del clima sea aún más impresionante! 🌟
