import { configureStore } from "@reduxjs/toolkit";
import personReducer from "./slices.js";

export const store = configureStore({
  reducer: {
    person: personReducer,
  },
});

export default store;
