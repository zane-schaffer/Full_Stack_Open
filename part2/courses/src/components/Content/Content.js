import React from "react";
import Part from "../Part";
import Sum from "../Sum";

const Content = ({ parts }) => (
  <>
    {parts.map((part) => (
      <Part name={part.name} exercises={part.exercises} key={part.id} />
    ))}
    <Sum parts={parts} />
  </>
);

export default Content;
