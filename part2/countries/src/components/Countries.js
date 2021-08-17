import React from "react";
import CountryStats from "./CountryStats";

const Countries = ({ countriesToShow, setFilter }) => {
  if (countriesToShow.length === 1) {
    return <CountryStats country={countriesToShow[0]} />;
  } else
    return (
      <div>
        {countriesToShow.length <= 10 ? (
          countriesToShow.map((country) => (
            <p key={country.alpha2Code}>
              {country.name}
              <button onClick={() => setFilter(country.name)}>show</button>
            </p>
          ))
        ) : (
          <p>Too many matches, specify another filter</p>
        )}
      </div>
    );
};

export default Countries;
