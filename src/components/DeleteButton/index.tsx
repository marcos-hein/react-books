import { Trash2 } from 'lucide-react';
import './DeleteButton.css';

type ButtonIconProps = {
  bookTitle: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function DeleteButton({ bookTitle, ...rest }: ButtonIconProps) {
  const labelButton = `Excluir livro ${bookTitle}`;
  return (
    <button className="deleteButton" aria-label={labelButton} title={labelButton} {...rest}>
      <Trash2 />
    </button>
  );
}
