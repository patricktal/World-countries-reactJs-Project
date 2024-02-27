import React from 'react';

const Card = ({ country }) => {
    return (
        <li className='card'>

            <img src={country.flags.svg} alt={country.translations.fra.common} />

            <div className='infos'>
                <h2>{country.translations.fra.common}</h2>
                <h2>{country.capital}</h2>
                <h2>Pop. {country.population.toLocaleString()}</h2>
            </div>
        </li>
    );
};

export default Card;