import { useState } from 'react'

export const CounterApp = () => {
  const [counter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const handleClick = () => {
    setCounter({...counter, counter1: counter.counter1 + 1})
  }

  return (
    <>
      <h3>Counter1: {counter.counter1}</h3>
      <h3>Counter2: {counter.counter2}</h3>
      <h3>Counter3: {counter.counter3}</h3>
      <hr />
      <button 
        onClick={handleClick}
        className="btn"
      >
        +1
      </button>
    </>
  )
}
