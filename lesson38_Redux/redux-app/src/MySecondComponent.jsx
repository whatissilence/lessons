import { useDispatch } from "react-redux";
import { increment, decrement, addCount } from './store/slices/counterSlice.js'

export default function MySecondComponent() {
  const dispatch = useDispatch();

  const handlePlus = () => {
    dispatch(increment());
  }

  const handleMinus = () => {
    dispatch(decrement());
  }

  const handleAddTen = () => {
    dispatch(addCount(10)); // це то само як і класичний виклик: dispatch({ type: 'counter/addCount', payload: 10 })
  }

  return <div>
    My Second component.<br />
    <button onClick={handlePlus} >Plus</button><br/>
    <button onClick={handleMinus} >Minus</button><br/>
    <button onClick={handleAddTen} >Plus 10</button>
  </div>
}







// import { useDispatch } from "react-redux";
// import { actions } from './store/index.js'
//
//
// export default function MySecondComponent() {
//   const dispatch = useDispatch();
//
//   const handlePlus = () => {
//     dispatch({ type: actions.INC })
//   }
//
//   const handleMinus = () => {
//     dispatch({ type: actions.DEC })
//   }
//
//   const handleAddTen = () => {
//     dispatch({ type: actions.ADD, payload: 10 })
//   }
//
//   return <div>
//     My Second component.<br />
//     <button onClick={handlePlus} >Plus</button><br/>
//     <button onClick={handleMinus} >Minus</button><br/>
//     <button onClick={handleAddTen} >Plus 10</button>
//   </div>
// }