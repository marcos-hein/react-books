import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../redux/store';

type PrivateRoutesProps = {
  component: React.ComponentType;
};

export function PrivateRoutes({ component: RouteComponent }: PrivateRoutesProps) {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  if (isAuthenticated) {
    return <RouteComponent />;
  }

  return <Navigate to="/" />;
}
