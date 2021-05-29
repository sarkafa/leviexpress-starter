import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';

const CityOptions = ({ name, code }) => {
  return (
    <>
      <option value={code}>{name}</option>
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('Vyberte');
  const [toCity, setToCity] = useState('Vyberte');
  const [date, setDate] = useState('Vyberte');
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((response) => response.json())
      .then((json) => setCities(json.data));

    // { name: 'Praha', code: 'CZ-PRG' },
    // { name: 'Brno', code: 'CZ-BRQ' },
  }, [cities]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(fromCity);
    console.log(toCity);
    console.log(date);
  };

  return (
    <div className="journey-picker container">
      <h2 className="journey-picker__head">Kam chcete jet?</h2>
      <div className="journey-picker__body">
        <form className="journey-picker__form" onSubmit={handleSubmit}>
          <label>
            <div className="journey-picker__label">Odkud:</div>
            <select
              value={fromCity}
              onChange={(event) => setFromCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              {cities.map((city) => (
                <CityOptions
                  name={city.name}
                  code={city.code}
                  key={city.code}
                />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Kam:</div>
            <select
              value={toCity}
              onChange={(event) => setToCity(event.target.value)}
            >
              <option value="">Vyberte</option>
              {cities.map((city) => (
                <CityOptions
                  name={city.name}
                  code={city.code}
                  key={city.code}
                />
              ))}
            </select>
          </label>
          <label>
            <div className="journey-picker__label">Datum:</div>
            <select
              value={date}
              onChange={(event) => setDate(event.target.value)}
            >
              <option value="">Vyberte</option>
              <option value="datum01">Datum 01</option>
              <option value="datum02">Datum 02</option>
              <option value="datum03">Datum 03</option>
              <option value="datum04">Datum 04</option>
              <option value="datum05">Datum 05</option>
            </select>
          </label>
          <div className="journey-picker__controls">
            <button className="btn" type="submit">
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
