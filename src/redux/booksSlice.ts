import { createSlice } from "@reduxjs/toolkit";
import { BOOKS_MOCK } from "../../mocks/books.mock";

export type Book = {
  id: number;
  title: string;
  author: string;
  releaseYear: number;
  pageCount: number;
  imageUrl: string;
  summary: string;
}

interface BooksState {
  list: Book[];
}

const initialState: BooksState = {
  list: BOOKS_MOCK
}

export const slice = createSlice({
  name: 'books',
  initialState,
  reducers: {

  }
})

export const { } = slice.actions;

export default slice.reducer;