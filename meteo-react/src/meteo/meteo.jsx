import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './meteo.css';

const Meteo = ({ city }) => {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!city) return; // Ne rien faire si aucune ville n'est fournie

        const fetchWeatherData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        q: city,
                        appid: '13a8212552579d1e8ec8126ba3817805', // Remplacez par votre clé API
                        units: 'metric' // Pour des températures en Celsius
                    }
                });
                setWeatherData(response.data);
            } catch (error) {
                setError('Erreur lors de la récupération des données météo');
            } finally {
                setLoading(false);
            }
        };

        fetchWeatherData();
    }, [city]);

    if (loading) return <div>Chargement des données météo...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            {weatherData && (
                <div>
                    <h2>Météo à {weatherData.name}</h2>
                    <p>Température: {weatherData.main.temp} °C</p>
                    <p>Condition: {weatherData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default Meteo;
