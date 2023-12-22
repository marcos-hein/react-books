import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../components';
import './Login.css';

type FieldState = {
  value: string;
  error: boolean;
};

type FormData = {
  username: FieldState;
  password: FieldState;
};

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    password: { value: 'a', error: false },
    username: { value: 'a', error: false },
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: {
        value,
        error: false,
      },
    });
  }

  function handleLogin() {
    const { password, username } = formData;

    // Valida se os campos estão preenchidos
    if (!username.value.length || !password.value.length) {
      setFormData({
        ...formData,
        username: {
          ...username,
          error: !username.value.length,
        },
        password: {
          ...password,
          error: !password.value.length,
        },
      });
      return;
    }

    dispatch(login(formData.username.value));
    navigate('/');
  }
  return (
    <section className="login__container">
      <h2 className="login__heading">React Books</h2>

      <Input
        name="username"
        label="Usuário"
        placeholder="Digite seu usuário"
        // data-testId="input-username"
        value={formData.username.value}
        error={formData.username.error}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        label="Senha"
        placeholder="Digite a sua senha"
        // data-testId="input-password"
        value={formData.password.value}
        error={formData.password.error}
        onChange={handleChange}
      />
      <button data-testId="login-button" onClick={handleLogin}>
        Login
      </button>
    </section>
  );
}
