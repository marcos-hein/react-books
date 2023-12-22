import './BookCard.css';

type BookCardProps = {
  title: string;
  author: string;
  imageUrl: string;
};

export function BookCard({ author, imageUrl, title }: BookCardProps) {
  return (
    <div className="bookCard__wrapper">
      <img src={imageUrl} alt={`Capa do livro ${title}`} />
      <div className="bookCard__info">
        <h3 className="bookCard__title">{title}</h3>
        <p className="bookCard__author">{author}</p>
      </div>
    </div>
  );
}
