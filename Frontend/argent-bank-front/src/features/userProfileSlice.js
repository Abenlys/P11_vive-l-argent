import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    email: "",
    firstName: "",
    id: "",
    lastName: "",
    userName: "",
    password: "",
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    setId: (state, action) => {
      state.id = action.payload;
    },
    setlastName: (state, action) => {
      state.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
  },
});

export const {
  setEmail,
  setFirstName,
  setId,
  setlastName,
  setUserName,
  setPassword,
} = userProfileSlice.actions;
export default userProfileSlice.reducer;
