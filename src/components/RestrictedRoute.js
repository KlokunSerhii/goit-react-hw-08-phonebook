import { useAuth } from 'huks/auth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ component: Component, redirectto = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectto} /> : <Component />;
};
