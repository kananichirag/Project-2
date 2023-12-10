import { createSlice } from "@reduxjs/toolkit";

const currentUserl =
  localStorage.getItem("Auth") !== null
    ? JSON.parse(localStorage.getItem("Auth"))
    : null;

const initialState = {
  currentUser: currentUserl,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
    },
    signInStart: (state) => {
      state.loading = true;
    },
    signInFailer: (state) => {
      state.loading = false;
    },
    Logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { signInFailer, signInStart, signInSuccess, Logout } =
  userSlice.actions;
export default userSlice.reducer;
