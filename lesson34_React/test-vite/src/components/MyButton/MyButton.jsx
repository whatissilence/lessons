import { useState } from 'react';
import {myButton, myButtonSpecial} from './MyButton.module.css';

export default function MyButton({ text, special, clickFunction }) {
  const [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    const freshCounter = counter + 1;

    setCounter(freshCounter);
    clickFunction(text, freshCounter);
  }


  return <button
    className={special ? myButtonSpecial : myButton }
    onClick={handleClick}
  >
    {text} - {counter}
  </button>;
}