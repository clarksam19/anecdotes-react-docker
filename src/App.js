import React, { useState } from 'react'

const Anecdote = ({ selected }) => {
  return <p>{selected}</p>
}

const Button = ( { text, onClick }) => {
  return <button onClick={onClick}>{text}</button>
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const arrayToObject = (array) => {
    const obj = {};
    array.forEach((_, index) => obj[index] = 0);
    return obj;
  };

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(arrayToObject(anecdotes));
  const [highest, setHighest] = useState(null);

  const mostVotes = (copy) => {
    const values = Object.values(copy);
    return values.findIndex(value => value === Math.max(...values));
  }

  const getRandomIndex = (max) => {
    return Math.floor(Math.random() * max);
  };

  const addVoteAtIndex = (index) => {
    const copy = { ...votes }
    copy[index]++;
    setVotes(copy);
    setHighest(mostVotes(copy));
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote selected={anecdotes[selected]} />
      <p>has {votes[selected]} votes</p>
      <p>
        <Button onClick={() => addVoteAtIndex(selected)} text='vote' />
        <Button onClick={() => setSelected(getRandomIndex(anecdotes.length))} text='random anecdote' />
      </p>
      <h1>Anecdote with most votes</h1>
      <Anecdote selected={anecdotes[highest] || ''} />
    </div>
  )
}

export default App