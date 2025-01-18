import React, { useState } from 'react';
import Recherche from './recherche/recherche';
import Meteo from './meteo/meteo';

const App = () => {
    const [city, setCity] = useState('');

    const handleSearch = (cityName) => {
        setCity(cityName);
    };

    return (
        <div className="app-container">
            <h1> Quelle est la météo à .. </h1>
            <Recherche placeholder="Entrez le nom de la ville" onSearch={handleSearch} />
            <Meteo city={city} />
        </div>
    );
};

export default App;