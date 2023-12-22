import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import booksReducer from "./booksSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    books: booksReducer.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch