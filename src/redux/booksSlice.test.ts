import { describe, expect, it } from 'vitest';
import booksSlice, { BooksState, remove } from './booksSlice';

describe('booksSlice', () => {
  it('should be able to remove book', () => {
    const initialState: BooksState = booksSlice.getInitialState();

    const state = booksSlice.reducer(initialState, remove(1));

    expect(state.list).toHaveLength(initialState.list.length - 1);
    expect(state.list).not.toContainEqual({ ...initialState.list[0] });
  });
});
