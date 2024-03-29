"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  darkModeState: boolean;
}

const initialState: DarkModeState = {
  darkModeState: false,
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkModeState = !state.darkModeState;
      const isDarkMode = !localStorage.getItem("darkMode"); // Invert current state
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
