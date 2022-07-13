import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
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
} from '../auth/authAction';

const initUserState = { name: null, email: null };

const user = createReducer(initUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => initUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload.user,
  [updateUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [registerError]: setError,
  [loginError]: setError,
  [logoutError]: setError,
  [getCurrentUserError]: setError,
  [updateUserError]: setError,

  [registerRequest]: () => false,
  [registerRequest]: () => false,
  [updateUserRequest]: () => false,

  [loginRequest]: () => false,
  [loginSuccess]: () => false,

  [logoutRequest]: () => false,
  [logoutSuccess]: () => false,

  [getCurrentUserRequest]: () => false,
  [getCurrentUserSuccess]: () => false,
});

const isLogged = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [getCurrentUserRequest]: () => true,
  [logoutSuccess]: () => false,
  [registerError]: () => false,
  [loginError]: () => false,
  [getCurrentUserError]: () => false,
});

// get spinner
const isLoading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,

  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,

  [logoutRequest]: () => true,
  [logoutSuccess]: () => false,
  [logoutError]: () => false,

  [getCurrentUserRequest]: () => true,
  [getCurrentUserRequest]: () => false,
  [getCurrentUserRequest]: () => false,
});

export default combineReducers({
  user,
  token,
  isLogged,
  error,
  isLoading,
});
