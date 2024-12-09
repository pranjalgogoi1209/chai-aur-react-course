/* 
  React control the UI updation,
  that's why we need useState to update in UI
*/

import "./App.css";
import { useState } from "react";

function App() {
  // let count = 0
  let [count, setCount] = useState(0);

  const addNumber = () => {
    // count +=1
    if (count <= 19) {
      setCount(count + 1);
      console.log("adding number", count);
    }
  };

  const removeNumber = () => {
    // count -= 1
    if (count >= 1) {
      setCount(count - 1);
      console.log("removing number", count);
    }
  };

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Count : {count}</h2>
      <button onClick={addNumber}>Add a Number</button>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={removeNumber}>Remove a Number</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <footer>
        This is a simple Counting Project using React,{" "}
        <strong>Count : {count}</strong>
      </footer>
    </>
  );
}

export default App;
