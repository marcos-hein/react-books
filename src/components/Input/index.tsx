import './Input.css';

export type InputProps = {
  label?: string;
  errorMessage?: string;
  error?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, id, error = false, errorMessage = 'Campo obrigatório', ...rest }: InputProps) {
  const inputErrorClassName = error ? '--error' : '';

  return (
    <div className="input__wrapper">
      {label && (
        <label className="input__label" htmlFor={id}>
          {label}
        </label>
      )}
      <input id={id} className={`input__control ${inputErrorClassName}`} {...rest} />
      {error && <span className="input__error">{errorMessage}</span>}
    </div>
  );
}
