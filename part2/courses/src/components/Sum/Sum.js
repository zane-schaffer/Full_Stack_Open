import React from "react";

const Sum = ({ parts }) => {
  const total = parts.reduce((s, p) => s + p.exercises, 0);
  return (
    <p>
      <strong>
        total of {total} {total === 1 ? "exercise" : "exercises"}
      </strong>
    </p>
  );
};

export default Sum;
