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

const teachersPersistConfig = {
  key: "teachers",
  storage,
  whitelist: ["favorites"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(teachersPersistConfig, authReducer),
    teachers: persistReducer(teachersPersistConfig, teacherReducer),
    // filters:
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoreActions: [FLUSH, REHYDRATE, PAUSE, PURGE, REGISTER, PERSIST],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
