import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const deez = () => {
    setSelected ( Math.floor(Math.random() * anecdotes.length)
    )
  }

  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));
  const vote = () => {
    const knutz = { ...votes };
    knutz[selected]++;
    return knutz;
  }

  return (
    <div>
      <button onClick={deez}>get some weird random quote. Tbh most of them are pretty bad. I wouldn't recommend it.</button>
      <button onClick={()=>setVotes(vote())}>Vote for the current quote for some reason. Again, I wouldn't recommend it.</button>
      <p>{anecdotes[selected]}</p>
      <p>has {votes[selected]} votes I guess</p>
    </div>
  )
}

export default App