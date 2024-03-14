import { createSlice } from "@reduxjs/toolkit";
import { TFilterType } from "../../../types";

const initialState: TFilterType = {
  language: null,
  level: null,
  price: null,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilters(state, action) {
      return { ...state, ...action };
    },
  },
});

export const { setFilters } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
