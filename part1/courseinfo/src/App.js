import React from 'react'


const Header = (props) => {
  return (
    <div>
    <h1>{props.course}</h1>
    </div>
  );
};

const Deez = (props) => {
  return (
  <div>
    <p>{props.part}{props.exercises}</p>
  </div>)
}

const Content = (props) => {
  return (
    <div>
      <Deez part = {props.pt1} exercises = {props.exercises1}/>
      <Deez part = {props.pt2} exercises = {props.exercises2}/>
      <Deez part = {props.pt3} exercises = {props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
    <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  );
};




const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

    return (
      <div>
        <Header course = {course} />
        <Content pt1 = {parts[0].name}
        exercises1 = {parts[0].exercises} />
        <Content pt2 = {parts[1].name}
        exercises2 = {parts[1].exercises} />
        <Content pt3 = {parts[2].name}
        exercises3 = {parts[2].exercises}
        />
        <Total exercises1 = {parts[0].exercises}
              exercises2 = {parts[1].exercises}
              exercises3 = {parts[2].exercises} />
      </div>
    )
  }

export default App;
