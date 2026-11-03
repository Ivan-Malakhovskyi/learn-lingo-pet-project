import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { themeVariants, TTheme } from "src/types";

const initialState: TTheme = { currentTheme: themeVariants.Yellow };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      state.currentTheme = action.payload;
    },
  },
});

const config = {
  key: "theme",
  storage,
};

export const themePersistReducer = persistReducer(config, themeSlice.reducer);
export const { setTheme } = themeSlice.actions;
