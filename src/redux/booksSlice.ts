import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { BOOKS_MOCK } from '../../mocks/books.mock';

export type Book = {
  id: number;
  title: string;
  author: string;
  releaseYear: number;
  pageCount: number;
  imageUrl: string;
  summary: string;
  rented: boolean;
};

export interface BooksState {
  list: Book[];
}

const initialState: BooksState = {
  list: BOOKS_MOCK,
};

export const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    create: (state, { payload: book }: PayloadAction<Omit<Book, 'rented'>>) => {
      state.list.push({ ...book, id: state.list.length + 1, rented: false });
    },
    edit: (state, { payload: book }: PayloadAction<Book>) => {
      const bookIndex = state.list.findIndex((b) => b.id === book.id);
      state.list[bookIndex] = book;
    },
    remove: (state, { payload: id }: PayloadAction<number>) => {
      state.list = state.list.filter((book) => book.id !== id);
    },
    toggleBookRental: (state, { payload: id }: PayloadAction<number>) => {
      const bookIndex = state.list.findIndex((book) => book.id === id);
      state.list[bookIndex].rented = !state.list[bookIndex].rented;
    },
  },
});

export const { create, edit, remove, toggleBookRental } = slice.actions;

export default slice;
