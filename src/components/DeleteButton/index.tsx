import { Trash2 } from 'lucide-react';
import './DeleteButton.css';

type ButtonIconProps = {
  bookTitle: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DeleteButton({ bookTitle, ...rest }: ButtonIconProps) {
  return (
    <button className="deleteButton" aria-label={`Excluir livro ${bookTitle}`} {...rest}>
      <Trash2 />
    </button>
  );
}
