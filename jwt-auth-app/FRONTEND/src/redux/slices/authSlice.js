import { createSlice } from "@reduxjs/toolkit";

const checkAuthState = () => {
  const token = localStorage.getItem("token");
  const isAuth = localStorage.getItem("isAuth") === "true";
  return { isAuth, token };
};

const initialState = {
  isAuth: checkAuthState().isAuth,
  token: checkAuthState().token,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, action) => {
      state.isAuth = true;
      state.token = action.payload;
    },
    unauthenticateUser: (state) => {
      state.isAuth = false;
      state.token = null;
    },
  },
});

export const { authenticateUser, unauthenticateUser } = authSlice.actions;
export default authSlice.reducer;
