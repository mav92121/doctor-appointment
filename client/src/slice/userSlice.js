import { createSlice } from "@reduxjs/toolkit";

const user = null;

export const userSlice = createSlice({
  name: "user",
  initialState: user,
  reducers: {
    setUser: (state, actions) => {
      return actions.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
