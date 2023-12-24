import './Button.css';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  isFullWidth?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, variant = 'primary', isFullWidth = false, ...rest }: ButtonProps) {
  const fullWidthClass = isFullWidth ? '--fullWidth' : '';
  return (
    <button className={`button --${variant} ${fullWidthClass}`} {...rest}>
      {children}
    </button>
  );
}
