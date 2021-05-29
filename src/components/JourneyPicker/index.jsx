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

const DateOptions = ({ dateBasic, dateExtended }) => {
  return (
    <>
      <option value={dateBasic}>{dateExtended}</option>
    </>
  );
};

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState('Vyberte');
  const [toCity, setToCity] = useState('Vyberte');
  const [date, setDate] = useState('Vyberte');
  const [cities, setCities] = useState([]);
  const [dates, setDates] = useState([]);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/cities')
      .then((response) => response.json())
      .then((json) => setCities(json.data));

    // { name: 'Praha', code: 'CZ-PRG' },
    // { name: 'Brno', code: 'CZ-BRQ' },
  }, []);

  useEffect(() => {
    fetch('https://leviexpress-backend.herokuapp.com/api/dates')
      .then((response) => response.json())
      .then((json) => setDates(json.data));
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(`https://leviexpress-backend.herokuapp.com/api/journey?fromCity=${fromCity}&toCity=${toCity}&date=${date}
    `)
      .then((response) => response.json())
      .then((json) => onJourneyChange(json.data));
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

              {dates.map((date) => (
                <DateOptions
                  dateExtended={date.dateExtended}
                  dateBasic={date.dateBasic}
                  key={date.dateBasic}
                />
              ))}
            </select>
          </label>
          <div className="journey-picker__controls">
            <button
              className="btn"
              type="submit"
              disabled={
                fromCity === 'Vyberte' ||
                toCity === 'Vyberte' ||
                date === 'Vyberte'
              }
            >
              Vyhledat spoj
            </button>
          </div>
        </form>
        <img className="journey-picker__map" src={mapImage} />
      </div>
    </div>
  );
};
