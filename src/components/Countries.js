import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36)
    const radios = ['Africa', 'America', 'Asia', 'Oceania', 'Europe']
    const [selectedRadio, setSelectedRadio] = useState('')
    useEffect(() => {
        axios
            .get("https://restcountries.com/v3.1/all")
            .then((res) => setData(res.data))
    }, []);

    return (

        <div className='countries'><h1>Countries</h1>
            <ul className='radio-container'>
                <input
                    type='range'
                    min='1'
                    max='250'
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                />
                {
                    radios.map((continent) => (
                        <li>
                            <input
                                type='radio'
                                id={continent}
                                checked={continent === selectedRadio}
                                name='continent'
                                onChange={(e) => setSelectedRadio(e.target.id)}
                            />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    ))
                }
            </ul>
            {selectedRadio && (
                <button onClick={() => setSelectedRadio('')}>Annuler le filtre</button>
            )}
            <ul>
                {
                    data
                        .filter((country) => country.continents[0].includes(selectedRadio))
                        .sort((x, y) => y.population - x.population)
                        .slice(0, rangeValue)
                        .map((country, index) =>
                            <Card key={index} country={country} />
                        )
                }
            </ul>
        </div>
    );
};

export default Countries;