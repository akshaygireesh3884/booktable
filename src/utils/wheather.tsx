
import axios from 'axios';
import { log } from 'console';

// Replace with your OpenWeatherMap API key
const apiKey = '016a9bc34cc7d535dc8062d6cb7bcb7e';

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather';

export async function fetchWeather(cityName: string) {
    try {
        const apiUrl = `${baseUrl}?q=${cityName}&appid=${apiKey}`;
         console.log("sdfsdfsdfsdf");
         
        const response = await axios.get(apiUrl);

        const weatherData = response.data;

        if (weatherData.cod === 200) {
            const main = weatherData.main;
            const weather = weatherData.weather[0];

            const currentTemperature = main.temp;
            const currentPressure = main.pressure;
            const currentHumidity = main.humidity;
            const weatherDescription = weather.description;

            return {
                temperature: currentTemperature,
                pressure: currentPressure,
                humidity: currentHumidity,
                description: weatherDescription,
            };
        } else {
            return null;
        }
    } catch (error:any) {
        // Handle errors
        console.error('Error fetching weather data:', error.message);
        throw error; // Re-throw error to handle in component
    }
}
