import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slice/loadingSlice";
export const store = configureStore({
  reducer: loadingReducer,
});
