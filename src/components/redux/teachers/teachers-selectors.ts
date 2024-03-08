export const selectTeachers = (state) => state.teachers.items;

export const selectFavoriteTeachers = (state) => state.teachers.favorites;

export const selectIsLoading = (state) => state.teachers.isLoading;

export const selectError = (state) => state.teachers.error;