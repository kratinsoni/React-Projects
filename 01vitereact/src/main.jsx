import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return (
    <h1>CHai is Always Ready</h1>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <App />
    MyApp()
  </>
);
