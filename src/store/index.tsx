
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducer/authSlice";
import dataReducer from "./reducer/dataSlice"

export const store = configureStore({
  reducer: {
    auth: authReducer,
    devices: dataReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
