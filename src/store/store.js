import { configureStore } from "@reduxjs/toolkit";
import autoCompleteReducer from "../reducers/autoCompleteReducer";

export const store = configureStore({
  reducer: {
    search: autoCompleteReducer,
  },
});
