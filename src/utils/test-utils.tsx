import { configureStore } from '@reduxjs/toolkit';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import authSlice from '../redux/authSlice';
import { Provider } from 'react-redux';

export function renderWithRedux(ui: React.ReactElement, { route = '/', initialState = {} } = {}) {
  window.history.pushState({}, 'Test page', route);

  const store = configureStore({ reducer: { auth: authSlice.reducer }, preloadedState: initialState });

  function Providers({ children }: { children?: React.ReactNode }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    );
  }

  return { store, ...render(ui, { wrapper: Providers }) };
}
