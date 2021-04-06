import React, { useState } from 'react'

const Button = ({text, onClick}) => <div><button onClick={onClick}>{text}</button></div>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(anecdotes.length).fill(0))

  console.log(votes)

  const genRandom = () => {
    let num = Math.floor(Math.random()*anecdotes.length)
    setSelected(num)
  }

  const incrementVote = () => {
    console.log(selected)
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    setVote(copy)
  } 


  return (
    <div>
      {anecdotes[selected]} has {votes[selected]} votes
      <Button onClick={genRandom} text="Next Anecdote"/>
      <Button onClick={incrementVote} text="Vote"/>
    </div>
  )
}

export default App