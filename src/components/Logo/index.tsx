import logo from '../../assets/logo.svg';
import './Logo.css';

export function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="Logo da SoftBooks" />
      <span>reactbooks</span>
    </div>
  );
}
