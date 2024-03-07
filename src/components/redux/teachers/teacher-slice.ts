import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type Teacher = {
  teachers: [];
};

type TeacherState = {
  favorites: Teacher[];
  isLoading: boolean;
  isFavorite: boolean;
  isError: null;
};

const initialState: TeacherState = {
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
    addTeacher: {
      reducer(state, action: PayloadAction<Teacher>) {
        state.favorites.push(action.payload);
      },
    },
    deleteTeacher: {
      reducer(state, action: PayloadAction<string>) {
        state.favorites = state.favorites.filter(
          (teacher) => teacher.id !== action.payload
        );
      },
      prepare(teacherId: string) {
        return { payload: teacherId };
      },
    },
  },
});

export const { addTeacher, deleteTeacher } = teachersSlice.actions;
export const teacherReducer = teachersSlice.reducer;
