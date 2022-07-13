import { toast } from 'react-toastify';

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
} from './authAction';
import {
  logInUser,
  logOutUser,
  signUpUser,
  userInfoCurrent,
} from '../../services/apiService';

export const register = payload => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await signUpUser(payload);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.message));
    toast.error(err.message);
  }
};

export const login = payload => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await logInUser(payload);
    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
    toast.error(error.message);
  }
};

export const logOut = () => async dispatch => {
  dispatch(logoutRequest());
  try {
    await logOutUser();
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutError(error.message));
    toast.error(error.message);
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

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
