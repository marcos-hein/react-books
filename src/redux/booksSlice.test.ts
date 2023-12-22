import { describe, expect, it } from 'vitest';
import booksSlice, { BooksState, remove, toggleBookRental } from './booksSlice';

const initialState: BooksState = booksSlice.getInitialState();

describe('booksSlice', () => {
  it('should be able to remove book', () => {
    const state = booksSlice.reducer(initialState, remove(1));

    expect(state.list).toHaveLength(initialState.list.length - 1);
    expect(state.list).not.toContainEqual({ ...initialState.list[0] });
  });

  it('should must be able to rent and return a book', () => {
    const state1 = booksSlice.reducer(initialState, toggleBookRental(1));
    expect(state1.list[0].rented).toBeTruthy();
    
    const state2 = booksSlice.reducer(state1, toggleBookRental(1));
    expect(state2.list[0].rented).toBeFalsy();
  });
});
