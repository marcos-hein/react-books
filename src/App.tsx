import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { PrivateRoutes } from './routes/PrivateRoute';
import './App.css';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <PrivateRoutes component={() => <div>Books</div>} /> },
    { path: '/login', element: <Login /> },
    { path: '*', element: <PrivateRoutes component={() => <div>Books</div>} /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
