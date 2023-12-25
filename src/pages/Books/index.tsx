import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { Book, remove } from '../../redux/booksSlice';
import { Input, BookCard, Layout, BookNotFound } from '../../components';
import './Books.css';

export function Books() {
  const dispatch = useDispatch();
  const stateBooks = useSelector((state: RootState) => state.books.list);
  const [books, setBooks] = useState<Book[]>(stateBooks);
  const [searchTerm, setSearchTerm] = useState<string>('');

  function handleDelete(id: number) {
    dispatch(remove(id));
  }

  useEffect(() => {
    setBooks(stateBooks);
  }, [stateBooks]);

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
    <Layout title="Lista de Livros">
      <section className="books__container" data-testid="books">
        <Input
          data-testid="search-input"
          placeholder="Buscar por título ou autor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {books.length ? (
          <ul className="books__list">
            {books.map(({ author, id, imageUrl, title, rented }: Book) => (
              <li key={id}>
                <BookCard
                  id={id}
                  author={author}
                  imageUrl={imageUrl}
                  title={title}
                  rented={rented}
                  onDelete={() => handleDelete(id)}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="books__notFound">
            <BookNotFound />
          </div>
        )}
      </section>
    </Layout>
  );
}
