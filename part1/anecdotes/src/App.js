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
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients",
  ];

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
