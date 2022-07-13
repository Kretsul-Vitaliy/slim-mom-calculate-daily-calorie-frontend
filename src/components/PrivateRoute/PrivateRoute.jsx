import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsAuthenticated } from '../../redux/auth/authSelector';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const token = useSelector(getIsAuthenticated);
  return token ? children : <Navigate to={redirectTo} />;
}
