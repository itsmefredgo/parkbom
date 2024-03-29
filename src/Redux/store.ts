"use client";

import { configureStore } from "@reduxjs/toolkit";
import darkModeStatus from "./Features/darkModeSlice";

export const store = configureStore({
  reducer: {
    darkMode: darkModeStatus,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
