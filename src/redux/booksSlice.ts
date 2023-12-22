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
    remove: (state, { payload: id }: PayloadAction<number>) => {
      state.list = state.list.filter((book) => book.id !== id);
    },
  },
});

export const { remove } = slice.actions;

export default slice;
