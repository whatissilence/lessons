import {useState} from "react";

export default function Counter({initialValue}) {
  const initVal = initialValue || 0;

  const [count, setCount] = useState(initVal);

  const inc = () => {
    setCount((count) => count + 1)
  }
  const dec = () => {
    setCount((count) => count - 1)
  }
  const res = () => {
    setCount(initVal)
  }

  return <div className="card">
    Counter: {count}<br />
    <button onClick={inc}>Up</button>
    <button onClick={dec}>Down</button>
    <button onClick={res}>Reset</button>
  </div>
}