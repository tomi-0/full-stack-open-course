import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App2 from './App.jsx'

let counter = 1

const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(
    <App2 counter={counter} />
  )
}

// we can re-render the counter and increment every second
setInterval(() => {
  refresh()
  counter += 1
}, 1000) 

// Making repeated calls to the render method is not the recommended way to re-render components