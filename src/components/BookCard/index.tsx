import { DeleteButton } from '..';
import './BookCard.css';

type BookCardProps = {
  title: string;
  author: string;
  imageUrl: string;
  onDelete?: () => void;
};

export function BookCard({ author, imageUrl, title, onDelete }: BookCardProps) {
  return (
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
  );
}
