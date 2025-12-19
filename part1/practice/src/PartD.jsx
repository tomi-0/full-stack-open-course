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
  // can use .push() but don't do this. As mentioned previously, 
  // the state of React components, like allClicks, must not be mutated directly.

  const handleRightClick = () => {
    setClicks(allClicks.concat('R'))
    setRight(right + 1)
    setTotal(total + 1)
  }

  return (
    <div>
      {left}
      <button onClick={handleLeftClick}>Left</button>
      <button onClick={handleRightClick}>Right</button>
      {right}
      <p>Clicks: {allClicks.join(' ')}</p>
      <p>Total: {total}</p>
    </div>
  )


}

export default App2