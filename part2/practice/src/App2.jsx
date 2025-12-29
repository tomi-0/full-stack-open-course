import { useState } from 'react'
import viteLogo from '/vite.svg'
import React from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({part, exercise}) => {
  return (
    <p>
      {part} {exercise}
    </p>
  )
}

const Content = ({parts}) => {
  return (
    <div>
      {parts.map( (p, i) => {
        // must explicitly state return since arrow functions return nothing since we use {} without a return statement
        return <Part part={p.name} exercise={p.exercises} key={i}/>
      })}
    </div>
  )
}

const Course = ({course}) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const Total = ({parts}) => {
  let total = 0
  parts.forEach( (part) => {
    total += part.exercises
  })

  return(
    <p>total of {total} exercises</p>
  )
}

const App2 = () => {
  const course = {
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
      },
      {
        name: 'Redux',
        exercises: 11
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App2
