import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsAuthenticated } from '../../redux/auth/authSelector';
export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLogged = useSelector(getIsAuthenticated);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
