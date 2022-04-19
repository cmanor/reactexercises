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
    <table>
      <tbody>
    <StatisticsLine text = "good " form = {good}/>
    <StatisticsLine text = "neutral " form = {neutral}/>
    <StatisticsLine text = "bad" form = {bad}/>
    <StatisticsLine text = "all " form = {all}/>
    <StatisticsLine text = "avg " form = {avg}/>
    <StatisticsLine text = "pos " form = {pos}/>
    </tbody>
    </table>
  )
  }
}
const StatisticsLine = (props) =>{
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.form}</td>
    </tr>
  )
}

const Asston = (props) => {
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
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
       <Asston onClick = {increaseByOne} text= "goooooooooood" />
       <Asston onClick = {deez} text= "meh" />
       <Asston onClick = {knutz} text= "shiz is garbage bro" />
       <h1>statistics</h1>
       <Statistics good = {good}
      bad = {bad}
      neutral = {neutral}/>
    </div>
  )
}

export default App
