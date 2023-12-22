import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { Book } from '../../redux/booksSlice';
import { Input, BookCard } from '../../components';
import './Books.css';

export function Books() {
  const stateBooks = useSelector((state: RootState) => state.books.list);
  const [books, setBooks] = useState<Book[]>(stateBooks);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    if (searchTerm !== '') {
      const filteredBooks = stateBooks.filter((book) => {
        const term = searchTerm.toLocaleLowerCase();
        const author = book.author.toLocaleLowerCase();
        const title = book.title.toLocaleLowerCase();

        if (author.includes(term) || title.includes(term)) {
          return book;
        }
      });
      setBooks(filteredBooks);
    } else {
      setBooks(stateBooks);
    }
  }, [searchTerm]);

  return (
    <div className="books__wrapper">
      <Input
        placeholder="Buscar por título ou autor"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul className="books__list">
        {books.map(({ author, id, imageUrl, title }: Book) => (
          <li key={id}>
            <BookCard author={author} imageUrl={imageUrl} title={title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
