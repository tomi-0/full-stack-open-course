import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [score, setScore] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setScore(score + 1)
    setTotal(total + 1)
  }
  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setScore(score + 0)
    setTotal(total + 1)
  }
  const handleBad = () => {
    setBad(bad + 1)
    setScore(score - 1)
    setTotal(total + 1)
  }

  return (
    <>
      <h1>give feedback</h1>

      <Button text="good" handler={handleGood}/>
      <Button text="neutral" handler={handleNeutral}/>
      <Button text="bad" handler={handleBad}/>

      <h1>statistics</h1>
      <p>good {good}</p>
      <p>netral {neutral}</p>
      <p>bad {bad}</p>

      <p>all {total}</p>
      <p>average {score/total}</p>
      <p>positive {(good/total) * 100}%</p>
    </>
  )
}

const Button = (props) => {
  const  {text, handler} = props
  return (
    <button onClick={handler}>{text}</button>
  )
}

export default App
