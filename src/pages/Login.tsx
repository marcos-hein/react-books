import { useState } from 'react';
import { Input } from '../components/Input/Input';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nome, setNome] = useState<string>('');

  function handleLogin() {
    dispatch(login(nome));
    navigate('/');
  }
  return (
    <section className="login__container">
      <h2 className="login__heading">React Books</h2>

      <Input
        name="nome"
        value={nome}
        label="Usuário"
        placeholder="Digite seu usuário"
        onChange={(e) => setNome(e.target.value)}
      />
      <Input name="password" type="password" label="Senha" placeholder="Digite a sua senha" />
      <button onClick={handleLogin}>Login</button>
    </section>
  );
}
