import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '@shared/lib/hooks/useAuth';

export const PublicRoute = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/users" replace />;
  }

  return <Outlet />;
};
