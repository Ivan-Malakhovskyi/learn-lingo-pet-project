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
    setUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    getCurrentUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    signOutUser: (state) => ({
      ...state,
      user: { name: null, email: null },
      isLoggedIn: false,
    }),
  },
});

export const { setUser, signOutUser, getCurrentUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
