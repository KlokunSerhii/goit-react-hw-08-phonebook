import { createSlice } from '@reduxjs/toolkit';
import { logout, login, register, refreshUser } from './operations';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { email: null, name: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: {
        [register.fulfilled] (state, { payload })  {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        },
    
        [login.fulfilled] (state, { payload }) {
          state.user = payload.user;
          state.token = payload.token;
          state.isLoggedIn = true;
        },
    
        [logout.fulfilled] (state) {
          state.user = { email: null, name: null };
          state.token = null;
          state.isLoggedIn = false;
        },
    
        [refreshUser.pending] (state)  {
          state.isRefreshing = true;
        },
        [refreshUser.fulfilled] (state, { payload }) {
          state.user = payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        },
        [refreshUser.rejected] (state)  {
          state.isRefreshing = false;
        },}
});

export default authSlice.reducer;
//     