import { Header } from '../Header';
import './Layout.css';

type LayoutProps = {
  children: React.ReactNode;
  title: string;
};

export function Layout({ children, title }: LayoutProps) {
  return (
    <div className="layout">
      <Header />
      <main className="layout__main">
        <h1 className="layout__heading">{title}</h1>

        {children}
      </main>

      <footer className="layout__footer">
        <p>
          Criado por{' '}
          <a href="https://github.com/marcos-hein" target="_blank" rel="noopener noreferrer">
            Marcos Hein
          </a>
        </p>
      </footer>
    </div>
  );
}
