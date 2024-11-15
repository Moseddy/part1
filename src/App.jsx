import { useState } from "react";

const Heading = ({ title }) => <h2>{title}</h2>;

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const Statistic = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td> 
  </tr>
);

const App = () => {
  const feedback = "Give feedback";
  const statistics = "Statistics";
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => setGood(good + 1);
  const handleNeutral = () => setNeutral(neutral + 1);
  const handleBad = () => setBad(bad + 1);
  const total = good + neutral + bad;
  let average = total === 0 ? "" : (good - bad) / total;
  let positive = total === 0 ? "" : (good / total) * 100;
  return (
    <div>
      <Heading title={feedback} />
      <Button onClick={handleGood} text={"good"} />
      <Button onClick={handleNeutral} text={"neutral"} />
      <Button onClick={handleBad} text={"bad"} />

      <Heading title={statistics} />
      {total > 0 && (
        <>
          <table>
            <tbody>
              <Statistic text={"good"} value={good} />
              <Statistic text={"neutral"} value={neutral} />
              <Statistic text={"bad"} value={bad} />
              <Statistic text={"all"} value={total} />
              <Statistic text={"average"} value={average} />
              <Statistic text={"positive"} value={positive + "%"} />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
