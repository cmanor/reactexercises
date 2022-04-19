import React, { useState } from 'react'

const Statistics = (props) => {
  const good = props.good;
  const neutral = props.neutral;
  const bad = props.bad;
  const all = bad + good + neutral;
  const avg = (bad-good)/all;
  const pos = (good/all*100);


if (good === 0 &&  neutral ===0 && bad ===0)
{
  return(
  <h1>CANDY CORN IS GROSS</h1>)
  } else { return (
    <div>
    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {all}</p>
    <p>average {avg}</p>
    <p>positive {pos}%</p>
    </div>
  )

  }
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const increaseByOne = () => setGood(good + 1);
  const deez = () => setNeutral(neutral + 1);
  const knutz = () => setBad(bad + 1);


  return (
    <div>
      <h1>give feedback</h1>
       <button onClick={increaseByOne}>good</button>
       <button onClick={deez}>neutral</button>
       <button onClick={knutz}>bad</button>
       <h1>statistics</h1>
       <Statistics good = {good}
      bad = {bad}
      neutral = {neutral}/>
    </div>
  )
}

export default App
