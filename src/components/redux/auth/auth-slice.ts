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
    getCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signIn: (state, action) => {
      state.user = action.payload.user;
      state.isLoggedIn = true;
    },
    signOutUser: (state) => ({
      ...state,
      user: { name: null, email: null },
      isLoggedIn: false,
    }),
  },
});

export const { signIn, signOutUser, getCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
