import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { signOutUser } from "../auth/auth-slice";
import { fetchTeachers } from "./operations";
import { TeacherType, Teacher } from "src/types";

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
    },
    deleteTeacher(state, action: PayloadAction<string>) {
      state.favorites = state.favorites.filter(
        teacher => teacher.id !== action.payload,
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTeachers.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.isError = null;
    });
    builder.addCase(fetchTeachers.pending, state => {
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

const config = {
  key: "teachers",
  storage,
  whitelist: ["favorites"],
};

export const { addTeacher, deleteTeacher } = teachersSlice.actions;
export const teacherPersistReducer = persistReducer(
  config,
  teachersSlice.reducer,
);
