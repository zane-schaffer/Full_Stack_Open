import React from "react";

const Filter = ({ handleFilterChange, filter }) => (
  <div>
    filter <input value={filter} onChange={handleFilterChange} />
  </div>
);

export default Filter;
