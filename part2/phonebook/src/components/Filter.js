import React from "react";

const Filter = ({ filterInput, handleFilterChange }) => (
  <div>
    <input value={filterInput} onChange={handleFilterChange} />
  </div>
);

export default Filter;
