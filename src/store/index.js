import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layout";
import loginReducer from "./login";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    login: loginReducer,
  },
});
