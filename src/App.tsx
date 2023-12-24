import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoute';
import { Books, BookDetails, Login, CreateBook, EditBook } from './pages';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Login /> },
    { path: '/books', element: <PrivateRoutes component={Books} /> },
    { path: '/books/create', element: <PrivateRoutes component={CreateBook} /> },
    { path: '/books/edit/:id', element: <PrivateRoutes component={EditBook} /> },
    { path: '/books/:id', element: <PrivateRoutes component={BookDetails} /> },
    { path: '*', element: <PrivateRoutes component={Books} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
