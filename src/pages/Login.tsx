import { Input } from '../components/Input/Input';
import './Login.css';

export function Login() {
  function handleLogin() {
    // TODO: implementar lógica de login
    console.log('usuário logado');
  }
  return (
    <section className="login__container">
      <h2 className="login__heading">Login</h2>

      <Input name="email" label="E-mail" placeholder="joao@mail.com" />
      <Input name="password" type="password" label="Senha" placeholder="Digite a sua senha" />

      <button onClick={handleLogin}>Login</button>
    </section>
  );
}
