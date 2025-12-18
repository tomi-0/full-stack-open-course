// we can add state to a componenet using React's state hook
import { useState } from 'react'

const App = () => {
    // counter is assigned to the state value
    // setCounter is assigned a function to modify the state
    const [counter, setCounter] = useState(0) // sets an initial state of 0

    //setTimeout( () => setCounter(counter + 1), 1000)
    //When the state modifying function setCounter is called, 
    // React re-renders the component which means that the function body of the component function gets re-executed:

    const increment = () => setCounter(counter + 1)
    

    const reset = () => setCounter(0)
    

    // An event handler (e.g. onClick) is supposed to be either a function or a function reference
    return (
        <>
        <Display counter={counter} />
        
        {/* We define the event handlers for our buttons where we declare their onClick attributes: */}
        <Button 
            label="Increment"
            func ={increment}
        />

        {/*  Usually defining event handlers within JSX-templates is not a good ide */}
        <Button 
            label='Reset'
            func={reset}
        />
        </>
    )

}

const Display = (props) => {
    return (
        <div>Counter: {props.counter}</div>
    )
}

// event handler is passed to the Button component through the func prop
const Button = (props) => {
    return (
        <button onClick={props.func}>
            {props.label}
        </button>
    )
}

export default App

// In React, useState, as well as any other function starting with “use”, is called a Hook.

// Hooks are special functions that are only available while React is rendering 
// They let you “hook into” different React features.