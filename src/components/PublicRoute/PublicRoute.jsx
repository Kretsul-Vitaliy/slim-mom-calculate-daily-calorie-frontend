import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { getIsUserAuthorizate } from '../../redux/auth';
export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
  const isLogged = useSelector(getIsUserAuthorizate);
  const shouldRedirect = isLogged && restricted;
  return shouldRedirect ? <Navigate to={redirectTo} /> : children;
}
