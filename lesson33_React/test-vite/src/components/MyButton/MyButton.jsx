import { useState } from 'react';
import { myButtonSpecial, myButton } from './MyButton.module.css';

export default function MyButton({ text, special }) {
  // const text = props.text;
  // const { text } = props;

  let [counter, setCounter] = useState(0);

  const handleClick = (event) => {
    setCounter(counter + 1);
  }


  return <button
    className={special ? myButtonSpecial : myButton }
    onClick={handleClick}
  >
    {text} - {counter}
  </button>;
}