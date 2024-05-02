import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
    addCount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, addCount } = counterSlice.actions;
export default counterSlice.reducer;




