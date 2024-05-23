// src/store/authSlice.ts

import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { authorizeUser } from "../apis";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authorizeUser.fulfilled, (state) => {
      localStorage.setItem("auth",JSON.stringify({
        authenticated: true
      }))
      state.isAuthenticated = true;

    });
  },
});

export const {  logout } = authSlice.actions;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
