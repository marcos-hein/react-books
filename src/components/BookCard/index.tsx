import { Link } from 'react-router-dom';
import { DeleteButton } from '..';
import './BookCard.css';

export type BookCardProps = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  rented: boolean;
  onDelete?: () => void;
};

export function BookCard({ id, author, imageUrl, title, rented, onDelete }: BookCardProps) {
  return (
    <div className={`bookCard__wrapper ${rented ? '--rented' : ''}`} data-testid="book-card">
      <div className="bookCard__image__wrapper">
        <img src={imageUrl} alt={`Capa do livro ${title}`} />
        {rented && <span className="bookCard__rented">Alugado</span>}
      </div>
      <div className="bookCard__info">
        <h3 className="bookCard__title">{title}</h3>
        <p className="bookCard__author">{author}</p>
      </div>

      <Link to={`/books/${id}`} className="bookCard__linkOverlay" />
      <div className="bookCard__deleteButton__wrapper">
        <DeleteButton bookTitle={title} onClick={onDelete} disabled={rented} />
      </div>
    </div>
  );
}
