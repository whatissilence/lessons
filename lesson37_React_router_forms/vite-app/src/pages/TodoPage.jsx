import {useLoaderData, useOutletContext, useParams} from "react-router-dom";


export default function TodoPage() {
  const { todoId} = useParams();
  const loaderData = useLoaderData();
  const contextData = useOutletContext();

  return <>
    <h2>Hello, {contextData.name}! This is TODO {todoId} page!</h2>
    <div>Todo id: {loaderData.id}</div>
    <div>Todo title: {loaderData.title}</div>
    <div>Todo userId: {loaderData.userId}</div>
  </>
}