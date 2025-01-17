import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "user",
  initialState: null, 
  reducers: {
    addUser: (state, action) => {
      return action.payload; 
    },
    removeUser: () => {
      return null; 
    },
  },
});


export const { addUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
