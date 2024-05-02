import { useState } from 'react'
import './App.css'
import MyFirstComponent from "./MyFirstComponent.jsx";
import MySecondComponent from "./MySecondComponent.jsx";
import MyThirdComponent from "./MyThirdComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Vite + React</h2>
      <div>
        Test
      </div>
      <MyFirstComponent />
      <MySecondComponent />
      <MyThirdComponent />
    </>
  )
}

export default App
