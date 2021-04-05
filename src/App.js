import React, { useState } from 'react'

/*const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}*/

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

/*const Display=(props) => {
  console.log(props.counter)
  return (
    <div>{props.counter}</div>
  )
}*/

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
      <Display counter={good} text='good'/>
      <Display counter={neutral} text='neutral' />
      <Display counter={bad} text='bad'/>
    </div>
  )
}

export default App