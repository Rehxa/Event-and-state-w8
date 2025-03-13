/** @format */

import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use many state to keep the inut values and other needs */
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [sum, setSum] = React.useState(0);
  /* You will need some function to handle the key pressed and button events */

  const onA = (event) => {
    setA(event.target.value);
  };

  const onB = (event) => {
    setB(event.target.value);
  };

  const onCompute = () => {
    if (isNaN(a) || isNaN(b)) {
      setSum("A and B must be numbers");
    } else {
      const parsedA = parseFloat(a);
      const parsedB = parseFloat(b);
      setSum(parsedA + parsedB);
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input onChange={onA} />

      <label>B =</label>
      <input onChange={onB} />

      <label>A + B =</label>

      {/* When Compute buton is clicked, this input display the sum of the 2 numbers, or the error message in RED */}
      <input
        disabled
        value={sum}
        style={{ color: isNaN(sum) ? "red" : "white" }}
      />
      <button onClick={onCompute}>Compute</button>
    </main>
  );
}

export default App;
