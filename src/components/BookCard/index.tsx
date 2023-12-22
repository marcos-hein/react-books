import { Link } from 'react-router-dom';
import { DeleteButton } from '..';
import './BookCard.css';

type BookCardProps = {
  id: number;
  title: string;
  author: string;
  imageUrl: string;
  onDelete?: () => void;
};

export function BookCard({ id, author, imageUrl, title, onDelete }: BookCardProps) {
  return (
    // TODO: reestilizar o componente Link para que ele fique com a aparência de um card
    <Link to={`/books/${id}`} className="bookCard__link">
      <div className="bookCard__wrapper">
        <img src={imageUrl} alt={`Capa do livro ${title}`} />
        <div className="bookCard__info">
          <h3 className="bookCard__title">{title}</h3>
          <p className="bookCard__author">{author}</p>
        </div>

        <div className="bookCard__deleteButton__wrapper">
          <DeleteButton bookTitle={title} onClick={onDelete} />
        </div>
      </div>
    </Link>
  );
}
