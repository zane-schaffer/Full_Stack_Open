import axios from "axios";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";
import Filter from "./components/Filter";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const countriesToShow = countries.filter((country) =>
    country.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <>
      <Filter handleFilterChange={handleFilterChange} filter={filter} />
      <Countries setFilter={setFilter} countriesToShow={countriesToShow} />
    </>
  );
};

export default App;
