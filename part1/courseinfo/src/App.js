import React from 'react'


const Header = (props) => {
  const bigknutz = props.bigknutz;
  return (
    <div>
    <h1>{bigknutz.name}</h1>
    </div>
  );
};

const Deez = (props) => {
  return (
  <div>
    <p>{props.name}{props.exercises}</p>
  </div>)
}

const Content = (props) => {
  const knutz = props.knutz;
  const parts = knutz.parts;
  return (
    <div>
      <Deez name={parts[0].name} exercises={parts[0].exercises}/>
      <Deez name={parts[1].name} exercises={parts[1].exercises}/>
      <Deez name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}


const Total = (props) => {
  const knutz = props.knutz;
  const parts = knutz.parts;
  return (
    <div>
    <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    </div>
  );
};




const App = () => {
  const knutz = {
    name: 'Half Stack application development',
    parts: [
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
  }


    return (
      <div>
        <Header bigknutz={knutz} />
    <Content knutz={knutz} />
    <Total knutz={knutz} />
      </div>
    )
  }

export default App;
