import { useDispatch } from 'react-redux';
import { Form, Layout } from '../../components';
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
    <Layout title="Criar Livro">
      <section className="createBook">
        <Form onSubmit={handleCreateBook} />
      </section>
    </Layout>
  );
}
