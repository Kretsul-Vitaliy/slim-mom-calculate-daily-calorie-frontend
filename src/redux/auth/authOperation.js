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
  updateUserRequest,
  updateUserSuccess,
  updateUserError,
} from './authAction';
import {
  logInUser,
  logOutUser,
  signUpUser,
  userInfoCurrent,
  updateUser,
} from '../../services/apiService';

export const register = newUser => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await signUpUser(newUser);
    dispatch(registerSuccess(response.data));
  } catch (err) {
    dispatch(registerError(err.message));
    toast.error(err.message);
  }
};

export const login = user => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await logInUser(user);
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
  // const {
  //   auth: { token: persistedToken },
  // } = getState();
  const state = getState();
  const persistedToken = state.auth.token;
  console.log('persistedToken', persistedToken);
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
