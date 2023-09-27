import React from 'react'
import { useState, useEffect } from 'react'

export default function ComponentStateTile() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
setCounter(100);
    }, []); //empty square brackets mean when a variables is given in it this effect is applied whenever there's a change in that variable.
  return (
    <div>
<button onClick={() => {setCounter((prev) => prev -1)}}>-</button>
<h1>{counter}</h1>
<button onClick={() => {setCounter((next) => next+1)}}>+</button>
    </div>
  )
}
