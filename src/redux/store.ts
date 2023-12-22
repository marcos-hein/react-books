import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';
import booksSlice from './booksSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    books: booksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
