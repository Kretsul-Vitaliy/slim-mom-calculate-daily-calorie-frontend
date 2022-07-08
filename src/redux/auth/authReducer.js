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
} from '../auth/authAction';

const user = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload,
  [loginSuccess]: (_, { payload }) => payload,
  [logoutSuccess]: () => null,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
  [loginSuccess]: (_, { payload }) => payload.token,
  [logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [logoutError]: (_, { payload }) => payload,
  [getCurrentUserError]: (_, { payload }) => payload,

  [registerRequest]: () => false,
  [registerRequest]: () => false,

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
  [logoutSuccess]: () => false,

  [registerError]: () => false,
  [loginError]: () => false,
  [logoutError]: () => false,
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
