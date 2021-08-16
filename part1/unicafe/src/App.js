import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Feedback = ({ addToGood, addToNeutral, addToBad }) => {
  return (
    <div>
      <Button handleClick={addToGood} text="good" />
      <Button handleClick={addToNeutral} text="neutral" />
      <Button handleClick={addToBad} text="bad" />
    </div>
  );
};

const StatisticLine = ({ text, value }) => {
  return (
    <>
      <td>{text}</td>
      <td>{value}</td>
    </>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const avg = (good - bad) / all;
  const pos = (good / all) * 100;
  return all == 0 ? (
    <>
      <p>No feedback given</p>
    </>
  ) : (
    <table>
      <tbody>
        <tr>
          <StatisticLine text="good" value={good} />
        </tr>

        <tr>
          <StatisticLine text="neutral" value={neutral} />
        </tr>
        <tr>
          <StatisticLine text="bad" value={bad} />
        </tr>
        <tr>
          <StatisticLine text="all" value={all} />
        </tr>
        <tr>
          <StatisticLine text="avergage" value={avg} />
        </tr>
        <tr>
          <StatisticLine text="positive" value={pos} />
        </tr>
      </tbody>
    </table>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <h1>give feedback</h1>
      <Feedback
        addToGood={() => setGood(good + 1)}
        addToNeutral={() => setNeutral(neutral + 1)}
        addToBad={() => setBad(bad + 1)}
      />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

export default App;
