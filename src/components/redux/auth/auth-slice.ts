import { createSlice } from "@reduxjs/toolkit";
import { TAuthType } from "../../../types";

const initialState: TAuthType = {
  user: { displayName: null, email: null },
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
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    signOutUser: state => ({
      ...state,
      user: { displayName: null, email: null },
      isLoggedIn: false,
    }),
  },
});

export const { setUser, signOutUser, getCurrentUser, setLoading } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
