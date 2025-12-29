import React from 'react'

const Header = ({course}) => {
  return (
    <h2>{course}</h2>
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
      {parts.map( (p) => {
        // must explicitly state return since arrow functions return nothing since we use {} without a return statement
        return <Part part={p.name} exercise={p.exercises} key={p.id}/>
      })}
    </div>
  )
}

const Total = ({parts}) => {
  let total = parts.reduce((sum, part) => {
    return sum + part.exercises
  }, 0)

  return(
    <p>total of {total} exercises</p>
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

export default Course