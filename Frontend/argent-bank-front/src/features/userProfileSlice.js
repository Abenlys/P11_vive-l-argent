import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {
      firstName: "",
      id: "",
      lastName: "",
      userName: "",
      token: "",
    },
    loged: false,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.user.firstName = action.payload;
    },
    setId: (state, action) => {
      state.user.id = action.payload;
    },
    setlastName: (state, action) => {
      state.user.lastName = action.payload;
    },
    setUserName: (state, action) => {
      state.user.userName = action.payload;
    },
    setToken: (state, action) => {
      state.user.token = action.payload;
    },
    setLogin: (state) => {
      state.loged = true;
    },
    setLogout: (state) => {
      state.loged = false;
    },
  },
});

export const {
  setFirstName,
  setId,
  setlastName,
  setUserName,
  setToken,
  setLogin,
  setLogout,
} = userProfileSlice.actions;
export default userProfileSlice.reducer;
