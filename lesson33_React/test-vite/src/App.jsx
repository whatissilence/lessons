import  React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import elephant from './assets/random.jpg';
import MyButton from "./components/MyButton/MyButton.jsx";
import MyUnderlinedText from "./components/MyUnderlinedText/MyUnderlinedText.jsx";

function App() {
  const [count, setCount] = useState(0)

  // const MyButton = <button>That is my button!</button>; // Можна додати до коду ось так: {MyButton}
  // const MyButton = React.createElement('button', null, "That is my button!");

  function handleClick(event) {
    setCount((count) => count + 1)
  }

  const secondButtonText = 'Second button';

  const fifthButtonParams = {
    text: 'Fifth button!',
    special: true,
  };

  return (
    <>
      <div id="logo-container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        <MyButton text="First button" special /><br />
        <MyButton text={secondButtonText} /><br />
        <MyButton text={`${1+1+1}rd button`} special /><br />
        <MyButton text={'Fourth button'} /><br />
        <MyButton {...fifthButtonParams}  /><br />
        <MyUnderlinedText><b>My super underlined text!</b> <button>test</button></MyUnderlinedText>

      </div>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
      <div>
        <img src={elephant}/>
      </div>

    </>
  )
}

export default App
