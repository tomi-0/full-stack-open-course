// module react-dom/client is placed into the variable ReactDOM
import ReactDOM from 'react-dom/client' 

// module that defines the main component of the app is placed into the variable App
import App from './App.jsx'
import React from "react";

import App2 from './App2.jsx'


const notes = [
  {
    id: 1,
    content: 'HTML is easy',
    important: true
  },
  {
    id: 2,
    content: 'Browser can execute only JavaScript',
    important: false
  },
  {
    id: 3,
    content: 'GET and POST are the most important methods of HTTP protocol',
    important: true
  }
]

/*
ReactDOM.createRoot(document.getElementById('root')).render(
    <App notes={notes} />
) */

  ReactDOM.createRoot(document.getElementById('root')).render(
    <App2 />
  )
