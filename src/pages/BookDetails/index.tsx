import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/store';
import { useNavigate, useParams } from 'react-router-dom';
import { Files, BookOpenText } from 'lucide-react';
import { Button } from '../../components';
import { toggleBookRental } from '../../redux/booksSlice';
import './BookDetails.css';

export function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector((state: RootState) => state.books.list.find((book) => book.id === Number(id)));

  function handleToggleBookRental() {
    dispatch(toggleBookRental(Number(id)));
  }

  return book ? (
    <section className={`bookDetails__container ${book.rented ? '--rented' : ''}`}>
      <div className="bookDetails__image__wrapper">
        <img src={book.imageUrl} alt={book.title} />
        {book.rented && <span className="bookDetails__rented">Alugado</span>}
      </div>

      <div className="bookDetails__content">
        <h3 className="bookDetails__content__title">{book.title}</h3>
        <h4 className="bookDetails__content__author">{book.author}</h4>

        <p className="bookDetails__content__summary">{book.summary}</p>

        <div className="bookDetails__content__info">
          <span>
            <BookOpenText size="16px" />
            Lançado em {book.releaseYear}
          </span>
          <span>
            <Files size="16px" />
            {book.pageCount} páginas
          </span>

          <div className="bookDetails__content__info__buttons">
            <Button onClick={handleToggleBookRental} isFullWidth>
              {book.rented ? 'Devolver' : 'Alugar'}
            </Button>
            <Button
              onClick={() => navigate(`/books/edit/${book.id}`)}
              variant="secondary"
              disabled={book.rented}
              isFullWidth
            >
              Editar
            </Button>
          </div>
        </div>
      </div>
    </section>
  ) : null;
}
