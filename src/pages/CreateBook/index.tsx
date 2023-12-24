import { useDispatch } from 'react-redux';
import { Form } from '../../components';
import { Book, create } from '../../redux/booksSlice';
import { useNavigate } from 'react-router-dom';
import './CreateBook.css';

export function CreateBook() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleCreateBook(book: Book) {
    dispatch(create(book));
    navigate('/books');
  }
  return (
    <section className="createBook">
      <h1>Create Book</h1>

      <Form onSubmit={handleCreateBook} />
    </section>
  );
}
