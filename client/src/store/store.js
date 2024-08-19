import { configureStore, combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "../slice/loadingSlice";
import userReducer from "../slice/userSlice";

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
