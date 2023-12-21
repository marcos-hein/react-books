import './Input.css';

export type InputProps = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, id, ...rest }: InputProps) {
  return (
    <div className="input__wrapper">
      <label className="input__label" htmlFor={id}>
        {label}
      </label>
      <input id={id} {...rest} />
    </div>
  );
}
