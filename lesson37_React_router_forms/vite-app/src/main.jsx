import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import TodosPage from "./pages/TodosPage.jsx";
import TodoPage from "./pages/TodoPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/todos',
    element: <TodosPage />,
    children: [
      {
        path: '/todos/:todoId',
        element: <TodoPage />,
        loader: ({params}) => {
          return fetch(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`)
            .then(response => response.json());
        }
      },
    ]
  },
  {
    path: '*',
    element: <NotFoundPage />
  }

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
