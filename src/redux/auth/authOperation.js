import { toast } from 'react-toastify';
import i18n from '../../i18n'
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
  refreshAuthRequest,
  refreshAuthSuccess,
  refreshAuthError,
} from './authAction';
import {
  logInUser,
  logOutUser,
  signUpUser,
  userInfoCurrent,
  updateUser,
} from '../../services/apiService';

// test
import axios from 'axios';
import { getUserInfoCurrent } from '../user/userOperation';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const tokenKey = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
// test

export const register = newUser => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await signUpUser(newUser);
    if (response.status === 201) {
      dispatch(registerSuccess(response.data));
      toast(
        i18n?.t?.('auth.verifyMail')
      );
    }
  } catch (err) {
    if (err.response.status === 409) {
      dispatch(loginError(i18n?.t?.('auth.userInBase')));
      // toast.error(err.message);
      toast(i18n?.t?.('auth.exEmail'));
      dispatch(loginRequest());
      return;
    }
    dispatch(registerError(err.message));
  }
};

export const login = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await logInUser(user);
    dispatch(loginSuccess(response));
  } catch (error) {
    if (error.response.status === 403) {
      dispatch(loginError(i18n?.t?.("auth.userNotFound")));
      dispatch(loginRequest());
      return;
    }
    dispatch(loginError(error.message));
    toast.error(i18n?.t?.("auth.userNotFound"));
  }
};

export const logOut = () => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.authData.token;
  try {
    dispatch(logoutRequest());
    await logOutUser(persistedToken);
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
    toast.error(error.message);
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  // const {
  //   auth: { token: persistedToken },
  // } = getState();
  const state = getState();
  const persistedToken = state.auth.authData.token;
  // console.log('persistedToken', persistedToken);
  if (!persistedToken) {
    return;
  }
  dispatch(getCurrentUserRequest());
  try {
    const response = await userInfoCurrent(persistedToken);
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};

export const updateUserChange = user => async dispatch => {
  dispatch(updateUserRequest());
  try {
    const response = await updateUser(user);
    dispatch(updateUserSuccess(response.data));
  } catch (error) {
    dispatch(updateUserError(error.message));
    toast.error(error.message);
  }
};
// test
export const authRefresh = (refreshToken, sid) => async dispatch => {
  tokenKey.set(refreshToken);
  const sidForRefresh = { sid };
  try {
    dispatch(refreshAuthRequest());
    const { data } = await axios.post('auth/refresh', sidForRefresh);
    const {
      newAccessToken: accessToken,
      newRefreshToken: refreshToken,
      sid,
    } = data;
    tokenKey.set(accessToken);
    await dispatch(
      refreshAuthSuccess({
        accessToken,
        refreshToken,
        sid,
      })
    );
    await dispatch(getUserInfoCurrent());
  } catch (error) {
    if (error.response.status === 401) {
      dispatch(logoutSuccess());
      return;
    }
    dispatch(refreshAuthError(error.data.message));
  }
};
// test
