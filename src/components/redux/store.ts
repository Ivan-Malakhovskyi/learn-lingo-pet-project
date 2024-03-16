import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { authReducer } from "./auth/auth-slice";
import {
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PURGE,
  // PERSIST,
  // REGISTER,
  persistStore,
} from "redux-persist";
import { teacherReducer } from "./teachers/teacher-slice";
import { TeacherType } from "../../types";
import { filterReducer } from "./teachers/filter-slice";

const teachersPersistConfig = {
  key: "teachers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    teachers: persistReducer<TeacherType>(
      teachersPersistConfig,
      teacherReducer
    ),
    filters: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);
