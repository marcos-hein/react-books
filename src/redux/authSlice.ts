import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  user: string;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  user: '',
  isAuthenticated: false,
}

export const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, { payload }: PayloadAction<string>) => {
      state.user = payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = '';
      state.isAuthenticated = false;
    }
  }
})

export const { login, logout } = slice.actions;

export default slice;