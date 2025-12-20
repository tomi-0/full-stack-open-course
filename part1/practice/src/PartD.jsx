import { useState } from 'react'

// we can create more complex state by storing
// state as an object

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => {
    const newClicks = { 
        // we can use object spread syntax
      ...clicks, // creates a new object that has copies of all of the properties of the clicks object.
      left: clicks.left + 1
    }
    setClicks(newClicks)
  }

  const handleRightClick = () => {
    const newClicks = { 
      left: clicks.left, 
      right: clicks.right + 1 
    }
    setClicks(newClicks)
  }

  // it's forbidden in React to change state directly
  // changing state has to always be done by setting the state to a new object
  // we create a copy of previous state then mutate copy

  // In this case, storing the click counters into separate pieces of state is a far more suitable choice.
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  )
}

const App2 = () => {
  // hooks MUST NOT be called from inside of a loop, 
  // a conditional expression, or any place that is not a function defining a component.
  // ensure that the hooks are always called in the same order

  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setClicks] = useState([])
  const [total, setTotal] = useState(0)

  //When the left button is clicked, we add the letter L to the allClicks array
  const handleLeftClick = () => {
    setClicks(allClicks.concat('L'))
    //  by calling setLeft(left + 1), the old value persists despite the update.
    // updating state is asynchronous

    /* --- Could use this instead
      const updatedLeft = left + 1
      setLeft(updatedLeft)
      setTotal(updatedLeft + right) 
    */
    setLeft(left + 1)
    setTotal(total + 1)
  }

  // debugger - allows us to inspect variable values


  // can use .push() but don't do this. As mentioned previously, 
  // the state of React components, like allClicks, must not be mutated directly.

  const handleRightClick = () => {
    setClicks(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }

  const [value, setValue] = useState(0)
  const setToValue = (val) => () => {
    console.log('New value: ',val)
    setValue(val)
  }

  // NEVER define components inside of other components.
  return (
    <div>
      {left}
      
      <Button label="Left" handleClick={handleLeftClick} />
      <Button label="Right" handleClick={handleRightClick} />
      {right}
      <History allClicks={allClicks} />
      <p>Total: {total}</p>

      {/* we can also use fucntions that return functions by calling it with some argument */}
      <button onClick={setToValue(value + 1)}>Increment</button>
      {value}
    </div>
  )
}


// conditional rendering
const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        No clicks have been made yet
      </div>
    )
  }
  return (
    <div>
      Button Press History: {allClicks.join(' ')}
    </div>
  )
}

const Button = ({label, handleClick}) => {
  return (
    <button onClick={handleClick}>
      {label}
    </button>
  )
}

export default App2