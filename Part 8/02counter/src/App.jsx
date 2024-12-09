// # INTERVIEW QUESTION ON COUNTER

import './App.css'
import { useState } from 'react'

function App() {
  let [count, setCount] = useState(0)

  const addNumber = () => {
    /* if(count <= 19){
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      // React's state updates are batched and asynchronous, all these updates are performed on the current value of counter, which hasn't been updated yet. This means that all four setCounter calls are using the same initial value of counter.
      console.log('adding number', count)
    } */ 
    if(count <= 19){
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      setCount(prevCounter => prevCounter + 1)
      // Using call back function in the setCount will increase the previous value
      console.log('adding number', count)
    }
  }

  const removeNumber = () => {
    if(count>=1){
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
      setCount(prevCount => prevCount - 1)
      // Using call back function in the setCount will decrease the previous value
      console.log('removing number', count)
    }
  }


  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Count : {count}</h2>
      <button onClick={addNumber}>Add a Number</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={removeNumber}>Remove a Number</button>
      <br /><br /><br /><br /><br />
      <footer>This is a simple Counting Project using React, <strong>Count : {count}</strong></footer>
    </>
  )
}

export default App
