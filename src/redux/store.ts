import { configureStore } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { authReducer } from "./auth/auth-slice";
import { persistStore } from "redux-persist";
import { teacherPersistReducer } from "./teachers/teacher-slice";
import { filterReducer } from "./teachers/filter-slice";
import { themePersistReducer } from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: teacherPersistReducer,
    filters: filterReducer,
    theme: themePersistReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const persistor = persistStore(store);
