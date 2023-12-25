import { describe, expect, it } from 'vitest';
import { Login } from '.';
import { renderWithRedux } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Login', () => {
  it('should render correctly', async () => {
    const { store } = renderWithRedux(<Login />, { route: '/login' });

    expect(store.getState().auth.isAuthenticated).toBeFalsy();

    const inputUsername = screen.getByTestId('input-username');
    const inputPassword = screen.getByTestId('input-password');
    const loginButton = screen.getByText('Login');

    await userEvent.type(inputUsername, 'test');
    await userEvent.type(inputPassword, 'test123');
    await userEvent.type(inputPassword, 'test123');
    await userEvent.click(loginButton);

    expect(window.location.pathname).toEqual('/books');
    expect(store.getState().auth.isAuthenticated).toBeTruthy();
  });
});
