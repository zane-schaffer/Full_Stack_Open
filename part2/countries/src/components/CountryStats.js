import axios from "axios";
import React, { useEffect, useState } from "react";

const CountryStats = ({ country }) => {
  const [weather, setWeather] = useState();
  console.log(process.env.REACT_APP_WEATHER_API_KEY);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${country.name}`
      )
      .then((response) => {
        console.log(response.data);
        setWeather(response.data);
      });
  }, [country.name]);
  return (
    <>
      <div>
        <h1>{country.name}</h1>
        <p>capital {country.capital}</p>
        <p>population {country.population}</p>
      </div>
      <div>
        <h2>languages</h2>
        <ul>
          {country.languages.map((language) => (
            <li key={language.iso639_1}>{language.name}</li>
          ))}
        </ul>
      </div>
      <div>
        <img width={100} alt={`flag of ${country.name}`} src={country.flag} />
      </div>
      {weather ? (
        <div>
          <h2>Weather in {weather.location.name}</h2>
          <p>
            <strong>temperature: </strong>
            {weather.current.temperature}
          </p>
          <img src={weather.current.weather_icons[0]} width={80} />
          <p>
            <strong>wind: </strong> {weather.current.wind_speed} mph direction{" "}
            {weather.current.wind_dir}
          </p>
        </div>
      ) : (
        <div>
          <h2>Loading weather data...</h2>
        </div>
      )}
    </>
  );
};

export default CountryStats;
