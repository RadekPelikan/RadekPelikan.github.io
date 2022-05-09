import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  current: "",
  themes: {},
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    switchTheme: (state, action) => {
      if (!Object.keys(state.options).includes(action.payload.toLowerCase()))
        return;
      state.current = action.payload;
    },
  },
});

export const { switchTheme } = themeSlice.actions;

export default themeSlice.reducer;
