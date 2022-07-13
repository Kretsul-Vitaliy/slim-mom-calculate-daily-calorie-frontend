import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import qs from 'qs';
import { createBrowserHistory } from 'history';
import { userInfo } from '../redux/user/userReducer';
import authSelector from '../redux/auth/authSelector';

export const useGoogleAuth = () => {
  const dispatch = useDispatch();
  const history = createBrowserHistory();
  const { user } = qs.parse(history.location.search);
  const isAuthUser = useSelector(authSelector.getIsAuthenticated);

  useEffect(() => {
    if (user) {
      const userObj = JSON.parse(user);
      dispatch(userInfo({ user: userObj }));
    }
  }, [dispatch, user]);

  return { isAuthUser };
};
