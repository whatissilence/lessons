import { useState } from 'react'
import './App.css'
import Counters from './components/Counters.jsx';
import Person from './components/Person.jsx';

function App() {
  const [state, setState] = useState({
    plusCount: 0,
    minusCount: 0,
    userName: '',
    email: '',
    showPerson: false
  });

  // const [ users, setUsers ] = useState([])
  // console.log(state);

  const handleChangeCounter = () => {
    setState({
      ...state,
      plusCount: state.plusCount + 1,
      minusCount: state.minusCount - 1
    })

    // setUsers([
    //   ...users,
    //   {name: 'aaa', age: 22}
    // ]);
  }

  const handlePlus = () => {
    state.plusCount++;
    setState({...state});
  }

  const handleMinus = () => {
    // Цей варіант ідеальний і завжди працює
    setState({
      ...state,
      minusCount: state.minusCount - 1
    })
  }

  const handleTogglePerson = () => {
    setState({
      ...state,
      showPerson: !state.showPerson
    })
  }

  // const handleReset = () => {
  //   setState({
  //     ...state,
  //     plusCount: 0,
  //     minusCount: 0,
  //   });
  // }

  return (
    <>
      <h3>My App</h3>
      <div>
        <button onClick={handleChangeCounter}>Change counters</button>
      </div>
      <div>
        <button onClick={handlePlus}>Plus</button>
      </div>
      <div>
        <button onClick={handleMinus}>Minus</button>
      </div>
      <div>
        <Counters plusCounter={state.plusCount} minusCounter={state.minusCount} setState={setState} />
      </div>
      <div>
        <button onClick={handleTogglePerson}>Toggle person</button>
      </div>
      <div>
        {state.showPerson && <Person name="Serhii" age={18} />}
        {/*<Person />*/}


      </div>
    </>
  )
}

export default App
