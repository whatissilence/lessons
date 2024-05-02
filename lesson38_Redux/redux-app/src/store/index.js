import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice.js'
import userSlice from "./slices/userSlice.js";

const store = configureStore({
  reducer: {
    counter: counterSlice,
    userSlice: userSlice
  }
});

export default store;






// Redux without toolkit =====================================

// import { createStore } from "redux";
//
// const initialState = {
//   counter: 0
// }
//
// export const actions = {
//   INC: 'INC',
//   DEC: 'DEC',
//   ADD: 'ADD'
// }
//
// const reducer = (state = initialState, action) => {
//   if (action.type === actions.INC) {
//     return {
//       counter: state.counter + 1
//     }
//   }
//
//   if (action.type === actions.DEC) {
//     return {
//       counter: state.counter - 1
//     }
//   }
//
//   if (action.type === actions.ADD) {
//     return {
//       counter: state.counter + action.payload
//     }
//   }
//
//   return state;
// }
//
// const store = createStore(reducer);
//
// export default store;