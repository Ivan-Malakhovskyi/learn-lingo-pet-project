import { TInitStateTypes } from "../../../types";

export const selectTeachers = (state: TInitStateTypes) => state.teachers.items;

export const selectFavoriteTeachers = (state: TInitStateTypes) =>
  state.teachers.favorites;

export const selectIsLoading = (state: TInitStateTypes) =>
  state.teachers.isLoading;

export const selectError = (state: TInitStateTypes) => state.teachers.isError;
