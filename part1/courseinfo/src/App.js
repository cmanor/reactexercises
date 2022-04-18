import React from 'react'


const Header = (props) => {
  const course = props.course;
  return (
    <div>
    <h1>{course}</h1>
    </div>
  );
};

const Content = (props) => {
  const parts = props.parts;
  return (
    <div>
      <Deez name={parts[0].name} exercises={parts[0].exercises}/>
      <Deez name={parts[1].name} exercises={parts[1].exercises}/>
      <Deez name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Deez = (props) => {
  return (
  <div>
    <p>{props.name}{props.exercises}</p>
  </div>)
}


const Total = (props) => {
  const parts = props.parts;
  return (
    <div>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
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
        <Header course={course} />
    <Content parts={parts} />
    <Total parts={parts} />
      </div>
    )
  }

export default App;
