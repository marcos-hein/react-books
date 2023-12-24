import { Button } from '..';
import './BookNotFound.css';

export function BookNotFound() {
  return (
    <section className="bookNotFound">
      <h2>Ops...</h2>
      <p>Não encontramos o livro que você está procurando.</p>

      <Button>Ir para lista de livros</Button>
    </section>
  );
}
