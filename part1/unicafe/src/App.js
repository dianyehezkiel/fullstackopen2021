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

const Statistics = (props) => {
  if(props.good !== 0 | props.neutral !== 0 | props.bad !== 0) {
    return (
      <div>
        <h1>statistics</h1>
        <Stats text='good' value={props.good} />
        <Stats text='neutral' value={props.neutral} />
        <Stats text='bad' value={props.bad} />
        <Stats text='all' value={props.total} />
        <Stats text='average' value={props.average} />
        <Stats text='positive' value={props.positive} />
      </div>
    )
  }
  
  return (
    <div>
      <p>No feedback given</p>
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
      <Statistics good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          average={average}
          positive={positive} />
    </div>
  )
}

export default App