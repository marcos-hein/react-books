import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { useParams } from 'react-router-dom';
import { BookCard } from '../../components';
import './BookDetails.css';

export function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state: RootState) => state.books.list.find((book) => book.id === Number(id)));

  // TODO: criar os componentes BookDetailsCard
  // TODO: criar fallback para quando não encontrar o livro
  return book ? <BookCard id={book.id} author={book.author} imageUrl={book.imageUrl} title={book.title} /> : null;
}
