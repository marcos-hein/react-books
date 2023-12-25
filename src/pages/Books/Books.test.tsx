import { describe, expect, it } from 'vitest';
import { Books } from '.';
import { renderWithProviders } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Books', () => {
  it('should render correctly', async () => {
    const { store } = renderWithProviders(<Books />);

    const books = screen.getByTestId('books');
    const searchInput = screen.getByTestId('search-input');
    const booksList = screen.getAllByTestId('book-card');

    expect(booksList).toHaveLength(store.getState().books.list.length);
    expect(books).toContain(searchInput);
  });

  it('should find the book correctly by title and author', async () => {
    renderWithProviders(<Books />);

    const searchInput = screen.getByTestId('search-input');

    await userEvent.type(searchInput, 'harry');
    const booksList1 = screen.getAllByTestId('book-card');

    expect(booksList1).toHaveLength(1);

    await userEvent.clear(searchInput);
    await userEvent.type(searchInput, 'tolkien');
    const booksList2 = screen.getAllByTestId('book-card');

    expect(booksList2).toHaveLength(2);
  });
});
