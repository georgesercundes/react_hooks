import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0)

  function handlerCounter() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <button onClick={handlerCounter}>Counter: {counter}</button>
    </div>
  )
}

