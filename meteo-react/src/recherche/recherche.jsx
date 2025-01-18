import React from 'react';
import { useForm } from 'react-hook-form';
import './recherche.css';

const Recherche = ({ placeholder, onSearch }) => {
    const { register, handleSubmit, reset } = useForm();

    const handleSearchSubmit = (data) => {
        onSearch(data.city); // Renvoie la valeur de la ville au parent
        reset(); // Réinitialise le champ
    };

    return (
        <form onSubmit={handleSubmit(handleSearchSubmit)}>
            <input
                type="text"
                placeholder={placeholder}
                {...register('city')}
            />
            <input type="submit" value="Rechercher" />
        </form>
    );
};

export default Recherche;
