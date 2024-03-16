import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TeacherType } from "../../../types";
import { Teacher } from "../../../types";
import { signOutUser } from "../auth/auth-slice";
import { fetchTeachers } from "./operations";

const initialState: TeacherType = {
  items: [],
  favorites: [],
  isLoading: false,
  isFavorite: false,
  isError: null,
};

const teachersSlice = createSlice({
  name: "teachers",
  initialState,
  reducers: {
    addTeacher(state, action: PayloadAction<Teacher>) {
      state.favorites.push(action.payload);
      console.log(state);
    },
    deleteTeacher(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        (teacher) => teacher.id !== action.payload
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(fetchTeachers.pending, (state) => {
      state.isLoading = true;
      state.isError = null;
    });
    builder.addCase(fetchTeachers.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    });
    builder.addCase(signOutUser, () => ({ ...initialState }));
  },
});

export const { addTeacher, deleteTeacher } = teachersSlice.actions;
export const teacherReducer = teachersSlice.reducer;
