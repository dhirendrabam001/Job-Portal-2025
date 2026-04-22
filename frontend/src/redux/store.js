import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import jobSlice from "./jobSlice";
import companySlice from "./companySlice";
import applicationSlice from "./applicationSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import createWebStorage from "redux-persist/es/storage/createWebStorage";

// fix for vite
const storage = createWebStorage("local");

const rootReducer = combineReducers({
  auth: authSlice,
  jobs: jobSlice,
  company: companySlice,
  application: applicationSlice,
});

// 🔥 CUSTOM TRANSFORM (REMOVE loading BEFORE SAVE)
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"],
  transforms: [
    {
      in: (state) => ({
        ...state,
        loading: false, // ❌ never save true
      }),
      out: (state) => ({
        ...state,
        loading: false, // ❌ always reset on load
      }),
    },
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
