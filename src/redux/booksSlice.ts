import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BOOKS_MOCK } from "../../mocks/books.mock";

export type Book = {
  title: string;
  author: string;
  releaseYear: number;
  pageCount: number;
  imageUrl: string;
  summary: string;
}

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: BOOKS_MOCK
}

export const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  }
})

export const { } = slice.actions;

export default slice.reducer;