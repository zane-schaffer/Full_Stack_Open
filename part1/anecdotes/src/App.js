import React, { useState } from "react";

const Anecdote = ({ anecdote, votes }) => {
  return (
    <>
      <p>
        {anecdote} <br /> has {votes} {votes !== 1 ? "votes" : "vote"}.
      </p>
    </>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [largestIndex, setLargestIndex] = useState(0);

  return (
    <>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} votes={points[selected]} />
      <Button
        handleClick={() => {
          let copy = [...points];
          copy[selected]++;
          let index = copy.indexOf(copy.reduce((p, c) => (c > p ? c : p)));
          setPoints(copy);
          setLargestIndex(index);
        }}
        text="vote"
      />
      <Button
        handleClick={() =>
          setSelected(Math.floor(Math.random() * anecdotes.length))
        }
        text="next anecdote"
      />

      <h1>Anecdote with most votes</h1>
      <Anecdote
        anecdote={anecdotes[largestIndex]}
        votes={points[largestIndex]}
      />
    </>
  );
};

export default App;
