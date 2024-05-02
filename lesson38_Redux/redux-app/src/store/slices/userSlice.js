import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

async function fetchUsersFromServer(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json());
  return data;
}

// УВАГА! Експортуємо thunk щоб використати його в dispatch
export const getUserById = createAsyncThunk(
  'users/getUserById',
  fetchUsersFromServer,
)


const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    user: {}
  },
  reducers: {
    // тут мають бути звичайні редʼюсери
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUserById.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getUserById.rejected, (state, action) => {
        console.log('getUser.rejected', action)
      })
  }
});

export default userSlice.reducer;




