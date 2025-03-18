import { configureStore } from "@reduxjs/toolkit";
import streamReducer from "./streamSlice";

export const store = configureStore({
  reducer: {
    streams: streamReducer,
  },
});
