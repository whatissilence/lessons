import {NavLink, Outlet} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";


export default function TodosPage() {
  const [todos, setTodos] = useState([]);

  const user = {
    name: 'Oleksii'
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
      .then(response => response.json())
      .then(data => setTodos(data));
  }, [])

  return <>
    <h2>This is TODOs page!</h2>

    {todos.map(todo => {
      return <Fragment key={todo.id}>
        <NavLink
          to={`/todos/${todo.id}`}
          className={({isActive}) => isActive ? 'active-navlink' : ''}
        >{todo.id} </NavLink>
      </Fragment>
    })}
    <hr />
    <Outlet context={user} />
  </>
}