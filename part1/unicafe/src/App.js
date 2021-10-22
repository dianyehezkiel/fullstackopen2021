import React, { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const Stats = ({text, value}) => {
  return (
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  };

  const handleClickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const handleClickBad = () => {
    setBad(bad + 1);
  };

  const total = good+neutral+bad;
  const average = (good-bad)/total;
  const positive = `${(good/total) * 100} %`

  return (
    <div>
      <h1>give feedback</h1>
      <Button text='good' handleClick={handleClickGood} />
      <Button text='neutral' handleClick={handleClickNeutral} />
      <Button text='bad' handleClick={handleClickBad} />
      <h1>statistics</h1>
      <Stats text='good' value={good} />
      <Stats text='neutral' value={neutral} />
      <Stats text='bad' value={bad} />
      <Stats text='all' value={total} />
      <Stats text='average' value={average} />
      <Stats text='positive' value={positive} />
    </div>
  )
}

export default App