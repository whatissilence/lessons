import React, {Fragment, useState} from 'react';
import './App.css';
import MyButton from "./components/MyButton/MyButton.jsx";
import MyUnderlinedText from "./components/MyUnderlinedText/MyUnderlinedText.jsx";

const buttonNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

function App() {
  const [ lastButton, setLastButton ] = useState('');
  const [ parentCounter, setparentCounter ] = useState('');
  const [ showText, setShowText ] = useState(true);

  function setLastButtonName(lastButtonName, counter) {
    console.log('handleButtonClick', lastButtonName, counter);
    if (counter % 2 === 0) { // Зараховуємо тільки парні числа
      setLastButton(lastButtonName);
      setparentCounter(counter);
    }
  }


  function handleShowInfoClick() {
    setShowText(!showText); // toggle - якщо воно було true, зробити false і навпаки
  }

  return (
    <>
      <h2>Last button pressed: {lastButton} - {parentCounter}</h2>
      <div>
        {
          // buttonNames .filter(bName => bName.startsWith('S')).map()
          buttonNames.map(bName =>
            <Fragment key={bName}>
              <MyButton text={bName} clickFunction={setLastButtonName} />
              <br/>
            </Fragment>
            )
        }
      </div>

      <button onClick={handleShowInfoClick}>{showText ? 'Less' : 'More'} information</button><br/>
      {/*{  showText ? <MyUnderlinedText>Some text</MyUnderlinedText> : null  }*/}
      { showText && <MyUnderlinedText>Some text</MyUnderlinedText> }
      {/*{ !showText && lastButton }*/}

    </>
  )
}

export default App
