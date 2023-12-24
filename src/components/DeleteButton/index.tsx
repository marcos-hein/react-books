import { Trash2 } from 'lucide-react';
import './DeleteButton.css';

type ButtonIconProps = {
  bookTitle: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DeleteButton({ bookTitle, disabled, ...rest }: ButtonIconProps) {
  const labelButton = disabled ? 'Livro alugado, não é possivel excluí-lo' : `Excluir livro ${bookTitle}`;
  return (
    <button className="deleteButton" aria-label={labelButton} title={labelButton} disabled={disabled} {...rest}>
      <Trash2 />
    </button>
  );
}
