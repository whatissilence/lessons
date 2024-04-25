import {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import './App.css'
import MouseCoors from "./components/MouseCoors.jsx";
import Todos from "./components/Todos.jsx";

const longLongCalculations = (value) => {
  let i = 0
  while (i < 1000000000) {
    i++;
  }

  return value * 2;
};


function App() {
  const [value, setValue] = useState('');
  const [page, setPage] = useState('users');
  const [data, setData] = useState(null);
  const [showMouseCoords, setShowMouseCoords] = useState(false);
  const [num, setNum] = useState(10);
  const [colored, setColored] = useState(false);
  const [todoCount, setTodoCount] = useState(7);

  const inputRef = useRef(null);
  const countRef = useRef(0);

  let simpleVariable = 0;

  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black'
    }
  }, [colored])

  console.log('Component rendered');

  const calcResult = useMemo(() => {
    console.log('longLongCalculations');
    return longLongCalculations(num);
  }, [num]);

  const requestTodos = useCallback(() => {
    console.log('Todos called');
    return Array.from(Array(todoCount).keys()).map(v => `Todo ${v}`);
  }, [todoCount])


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${page}`)
      .then(response => response.json())
      .then(data => setData(data));
    console.log('Request for ', page);
  }, [page])

  useEffect(() => {
    console.log('Styles variable changed');
  }, [styles])


  return (
    <>
      <h3 style={styles}>My App</h3>
      <div>
        Value with state:{value}<br />
        Count ref:{countRef.current}<br />
        Simple variable:{simpleVariable}<br />
        Long calculated value: {calcResult}
      </div>
      <div>
        Input with state: <input value={value} onChange={(e) => setValue(e.target.value)} /><br />
        Input with ref: <input ref={inputRef} />
      </div>
      <div>
        <button onClick={()  => setPage('users')}>Users</button>
        <button onClick={()  => setPage('posts')}>Posts</button>
        <button onClick={()  => setShowMouseCoords(prev => !prev)}>Toggle Mouse Coordinates</button>
        <button onClick={()  => inputRef.current.focus()}>Set focus</button>
        <button onClick={()  => { countRef.current++; simpleVariable++ }}>Plus</button><br />
        <button onClick={()  => setNum(prev => prev + 1)}>Plus Num </button>
        <button onClick={()  => setColored(prev => !prev)}>Change color </button>
        <button onClick={()  => setTodoCount(prev => prev + 1)}>Add Todo </button>
      </div>
      { showMouseCoords && <MouseCoors/> }
      <div style={{textAlign: 'left'}}>
        <h3>{page}</h3>
        {/*<pre>*/}
        {/*  {JSON.stringify(data, null, 2)}*/}
        {/*</pre>*/}
        <Todos getTodos={requestTodos}/>
      </div>
    </>
  )
}

export default App
