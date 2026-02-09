import { configureStore } from "@reduxjs/toolkit";
import jobSlice from "./jobSlice";
import authSice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSice,
    job: jobSlice,
  },
});

export default store;
