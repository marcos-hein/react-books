import { useDispatch, useSelector } from 'react-redux';
import { Form } from '../../components';
import { Book, edit } from '../../redux/booksSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../redux/store';
import './EditBook.css';

export function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const book = useSelector((state: RootState) => state.books.list.find((book) => book.id === Number(id)));

  function handleEditBook(editBook: Book) {
    dispatch(edit(editBook));
    navigate(`/books/${id}`);
  }
  return (
    <section className="editBook">
      <h1>Edit Book</h1>

      <Form onSubmit={handleEditBook} editBook={book} />
    </section>
  );
}
