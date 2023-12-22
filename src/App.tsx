import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PrivateRoutes } from './routes/PrivateRoute';
import { Books, Login } from './pages';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoutes component={Books} /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <PrivateRoutes component={Books} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
