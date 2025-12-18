import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// adding code to main branch

function App() {
  const [count, setCount] = useState(0)
  console.log("Hello again React")
  const a = 7
  const b = 70

  return (
    
    <>
      {/* sends an object as an argument */}
      <Hello name="Rosemary" age={b}/>
      <Hello2 name="Bill" age={20}/>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* we wrap javascript code in curly braces */}
      {/*  every tag needs to be closed. i.e. <br> becomes <br /> */}
      <p>Did you know {a} + {b} = {a+b}</p>
    </>
  )
}

// props allows us to pass data into componenets
// props has arbitrary number of attributes
const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old.</p>
    </div>
  )
}

// we can also return an array of elements rather them wrapping
// them all in one tag i.e. fragments <> </>

// we can destructure an array 
// const t = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = t

// we can also destructure within the function parameters
const Hello2 = ({name, age}) => {
  // destructures an objects properties for us into variables
  // const {name, age} = props
  return (
    <div>
      <p>Hello {name}, you are {age} years old.</p>
    </div>
  )
}

const App2 = (props) => {
  const {counter} = props
  return (
    <div>Counter: {counter}</div>
  )

}

export default App2
