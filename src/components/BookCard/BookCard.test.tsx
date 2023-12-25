import { describe, expect, it, vitest } from 'vitest';
import { BookCard, BookCardProps } from '.';
import { renderWithProviders } from '../../utils/test-utils';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const onDelete = vitest.fn();

const mockProps: BookCardProps = {
  author: 'J. K. Rowling',
  id: 1,
  imageUrl: 'https://images.com/harry-potter-1.jpg',
  rented: false,
  title: 'Harry Potter e a Pedra Filosofal',
  onDelete,
};

describe('BookCard', () => {
  it('should render correctly', async () => {
    renderWithProviders(<BookCard {...mockProps} />);

    const bookCard = screen.getByTestId('book-card');
    const image = screen.getByRole('img');
    const rentedElement = screen.queryByText('Alugado');
    const title = screen.getByText(mockProps.title);
    const author = screen.getByText(mockProps.author);
    const deleteButton = screen.getByRole('button');
    const link = screen.getByRole('link');

    await userEvent.click(deleteButton);

    expect(bookCard).toContain(image);
    expect(rentedElement).toBeNull();
    expect(bookCard).toContain(title);
    expect(bookCard).toContain(author);
    expect(bookCard).toContain(deleteButton);
    expect(link.getAttribute('href')).toEqual(`/books/${mockProps.id}`);
    expect(onDelete).toHaveBeenCalled();
  });

  it('should disable delete button when the book is rented', async () => {
    renderWithProviders(<BookCard {...mockProps} rented={true} />);

    const bookCard = screen.getByTestId('book-card');
    const rentedElement = screen.queryByText('Alugado');
    const deleteButton = screen.getByRole('button');

    expect(bookCard).toContain(rentedElement);
    expect(deleteButton.hasAttribute('disabled')).toBeTruthy();
  });
});
