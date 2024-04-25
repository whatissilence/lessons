import {useEffect, useState} from "react";

export default function Todos ({getTodos}) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(getTodos());
  }, [getTodos])

  return <ul>
    {todos.map(val => <li key={val}>{val}</li>)}
  </ul>
}