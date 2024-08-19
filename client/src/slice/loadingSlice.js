import { createSlice } from "@reduxjs/toolkit";
const initialState = false;

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
