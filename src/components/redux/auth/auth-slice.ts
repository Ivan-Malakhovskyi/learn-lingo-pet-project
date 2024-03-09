import { createSlice } from "@reduxjs/toolkit";
import { TAuthType } from "../../../types";

const initialState: TAuthType = {
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
    setUser: (state, action) => ({
      ...state,
      user: { name: action.payload.name, email: action.payload.email },
    }),

    signIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signOutUser: (state) => ({
      ...state,
      user: { name: null, email: null },
      isLoggedIn: false,
    }),
    getCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { signIn, setUser, signOutUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
