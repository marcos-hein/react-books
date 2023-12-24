import { Link } from 'react-router-dom';
import { Logo } from '..';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';
import './Header.css';

export function Header() {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logout());
  }

  return (
    <header className="header">
      <div className="header__content">
        <Logo />
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/books">Lista</Link>
            </li>
            <li>
              <Link to="/books/create">Criar</Link>
            </li>
            <li>
              <Link to="#" onClick={handleLogout}>
                Logout
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
