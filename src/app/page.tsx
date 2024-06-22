'use client'

import { useState } from 'react';
import { fetchWeather } from '../utils/wheather';

const Wheather = () => {
    const [cityName, setCityName] = useState('');
    const [weatherData, setWeatherData] = useState<any>(null);
    const [error, setError] = useState('');

    const handleFetchWeather = async () => {
        try {
            const data = await fetchWeather(cityName);
            if (data) {
                setWeatherData(data);
                console.log("wheather data",data);
                setError('');
            } else {
                setWeatherData(null);
                setError('City not found');
            }
        } catch (error:any) {
            console.error('Error fetching weather data:', error.message);
            setError('Error fetching weather data');
        }
    };

    return (
        <div className='container'>
            <h1>Weather Information</h1>
            <div className="form-container">
            <input
                type="text"
                placeholder="Enter city name"
                value={cityName}
                onChange={(e) => setCityName(e.target.value)}
            />
            <button onClick={handleFetchWeather}>Get Weather</button>
            </div>
           
            {error && <p className="error-message">{error}</p>}

            {weatherData && (
                <div className="weather-container">
                    <p className="weather-info">Temperature: {weatherData.temperature} Kelvin</p>
                    <p className="weather-info">Pressure: {weatherData.pressure} hPa</p>
                    <p className="weather-info">Humidity: {weatherData.humidity} %</p>
                    <p className="weather-info">Description: {weatherData.description}</p>
                </div>
            )}
                        <style jsx>{`
                .container {
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }

                .form-container {
                    margin-bottom: 20px;
                }

                input[type='text'] {
                    padding: 10px;
                    font-size: 16px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    margin-right: 10px;
                    width: 200px;
                }

                button {
                    padding: 10px 20px;
                    font-size: 16px;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                .error-message {
                    color: red;
                    font-weight: bold;
                }

                .weather-container {
                    background-color: #f0f0f0;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    padding: 20px;
                    margin-top: 20px;
                }

                .weather-info {
                    margin-bottom: 10px;
                }
            `}</style>

        </div>
    );
};

export default Wheather;

