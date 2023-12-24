import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoute';
import { Books, BookDetails, Login, CreateBook } from './pages';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/books', element: <PrivateRoutes component={Books} /> },
    { path: '/books/create', element: <PrivateRoutes component={CreateBook} /> },
    { path: '/books/:id', element: <PrivateRoutes component={BookDetails} /> },
    { path: '*', element: <PrivateRoutes component={Books} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
