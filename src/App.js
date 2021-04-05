import React, { useState } from 'react'

/*const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}*/

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Statistics = ({good, bad, neutral}) => {
  if((good === 0) && (bad === 0) && (neutral === 0)) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  else{
    let total = good + bad + neutral
    let avg = (good + bad*-1)/total
    let pos = good/total
    return(
      <div>
        Good: {good}
        Neutral: {neutral}
        Bad: {bad}
        Total count is {total}
        Average: {avg}
        Positive: {pos}
      </div>
    )
  }
}

const Display = ({counter,text}) => <div>{text} {counter}</div>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const clickGood = () => setGood(good+1)
  const clickNeutral = () => setNeutral(neutral+1)
  const clickBad = () => setBad(bad+1)

  return (
    <div>
      Give Feedback
      <Button handleClick={clickGood} text='Good' />
      <Button handleClick={clickNeutral} text='Neutral' />
      <Button handleClick={clickBad} text='Bad' />
      Statistics
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App