import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button className={`button --${variant}`} {...rest}>
      {children}
    </button>
  );
}
