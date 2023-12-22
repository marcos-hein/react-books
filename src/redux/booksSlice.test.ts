import { describe, expect, it } from 'vitest';
import booksSlice, { Book, BooksState, create, edit, remove, toggleBookRental } from './booksSlice';

const initialState: BooksState = booksSlice.getInitialState();

describe('booksSlice', () => {
  it('should be able to create a book', () => {
    const newBook: Omit<Book, 'rented'> = {
      id: 99,
      title: 'Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos',
      author: 'Aditya Y. Bhargava',
      imageUrl: 'https://m.media-amazon.com/images/I/71Vkg7GfPFL._SL1296_.jpg',
      pageCount: 264,
      releaseYear: 2017,
      summary:
        '"Entendendo Algoritmos: Um Guia Ilustrado Para Programadores e Outros Curiosos" é uma obra que desbrava o complexo mundo dos algoritmos de forma acessível e visualmente envolvente.',
    };

    const state = booksSlice.reducer(initialState, create(newBook));

    expect(state.list).toHaveLength(initialState.list.length + 1);
    expect(state.list).toContainEqual({ ...newBook, rented: false });
  });

  it('should be able to edit a book', () => {
    const editedBook: Book = {
      ...initialState.list[0],
      title: 'Test',
    };

    const state = booksSlice.reducer(initialState, edit(editedBook));

    expect(state.list).toHaveLength(initialState.list.length);
    expect(state.list).toContainEqual(editedBook);
  });

  it('should be able to remove a book', () => {
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
