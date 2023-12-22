import { describe, expect, it } from 'vitest'
import authSlice, { login, logout } from './authSlice'

describe('authSlice', () => {
  it('should be able to login', () => {
    const initialState = authSlice.getInitialState()

    const state = authSlice.reducer(initialState, login('test'))

    expect(state.isAuthenticated).toBeTruthy()
    expect(state.user).toEqual('test')
  })

  it('should be able to logout', () => {
    const state = authSlice.reducer({ isAuthenticated: true, user: 'test' }, logout())

    expect(state.isAuthenticated).toBeFalsy()
  })
})