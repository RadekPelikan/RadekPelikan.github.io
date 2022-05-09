import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "services/theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});