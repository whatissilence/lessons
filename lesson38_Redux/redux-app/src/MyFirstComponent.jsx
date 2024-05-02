import {useDispatch, useSelector} from 'react-redux';
import { getUserById } from './store/slices/userSlice.js';

export default function MyFirstComponent() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.count);

  function handleButtonClick() {
    dispatch(getUserById(2)); // User id passed in request
  }

  return <div>
    My First component. Counter: {counter}<br />
    <button onClick={handleButtonClick} >Get Data from Server</button><br /><br />
  </div>
}