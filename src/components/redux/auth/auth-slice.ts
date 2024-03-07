import { createSlice } from "@reduxjs/toolkit";

type initialStateTypes = {
  user: { name: null; email: null };
  isLoggedIn: boolean;
  isRefresh: boolean;
  isLoading: boolean;
  error: null;
};

const initialState = {
  user: { name: null, email: null },
  isLoggedIn: false,
  isRefresh: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signOut: (state) => {
      state.user = { name: null, email: null };
      state.isLoggedIn = false;
    },

    getCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const authReducer = authSlice.reducer;
