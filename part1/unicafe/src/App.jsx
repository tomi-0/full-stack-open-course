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
    <div>
      <h1>give feedback</h1>

      <Button text="good" handler={handleGood}/>
      <Button text="neutral" handler={handleNeutral}/>
      <Button text="bad" handler={handleBad}/>

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} score={score}/>
    </div>
  )
}

const Button = (props) => {
  const  {text, handler} = props
  return (
    <button onClick={handler}>{text}</button>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad, total, score } = props 
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <p>
        No feedback given
      </p>
    )
  } else {
    return (
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={total}/>
          <StatisticLine text="average" value={score/total}/>
          <StatisticLine text="positive" value={((good/total) * 100) + "%"}/>
        </tbody>
      </table>
    )
  }
  
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

export default App
