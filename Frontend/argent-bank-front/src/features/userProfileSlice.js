import { createSlice } from "@reduxjs/toolkit";

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    user: {
      email: "",
      firstName: "",
      id: "",
      lastName: "",
      userName: "",
      password: "",
      token: "",
    },
    loged: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.user.email = action.payload;
    },
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
    setPassword: (state, action) => {
      state.user.password = action.payload;
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
  setEmail,
  setFirstName,
  setId,
  setlastName,
  setUserName,
  setPassword,
  setToken,
  setLogin,
  setLogout,
} = userProfileSlice.actions;
export default userProfileSlice.reducer;
