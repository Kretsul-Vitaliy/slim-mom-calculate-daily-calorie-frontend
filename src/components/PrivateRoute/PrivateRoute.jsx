import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsUserAuthorizate } from '../../redux/auth/authSelector';

export default function PrivateRoute({ children, redirectTo = '/' }) {
  const token = useSelector(getIsUserAuthorizate);
  return token ? children : <Navigate to={redirectTo} />;
}
