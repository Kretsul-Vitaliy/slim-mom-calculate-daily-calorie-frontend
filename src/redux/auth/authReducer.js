import { createReducer, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
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
  refreshAuthSuccess,
  refreshAuthRequest,
  refreshAuthError,
} from '../auth/authAction';

// const initUserState = { name: null, email: null };

const persistConfig = {
  key: 'token',
  version: 1,
  storage,
  whitelist: ['token', 'sid', 'auth', 'user'],
};

const authDataReducer = createReducer(
  {},
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [logoutSuccess]: () => ({}),
    [getCurrentUserSuccess]: (_, { payload }) => payload,
    [updateUserSuccess]: (_, { payload }) => payload.user,
    [refreshAuthSuccess]: (_, { payload }) => payload,
  }
);

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
  [refreshAuthError]: setError,
  [getCurrentUserError]: setError,
  [updateUserError]: setError,

  [registerRequest]: () => '',
  [registerRequest]: () => false,
  [updateUserRequest]: () => false,

  [loginRequest]: () => '',
  // [loginSuccess]: () => false,

  [logoutRequest]: () => '',
  // [logoutSuccess]: () => false,
  [refreshAuthRequest]: () => '',
  // [getCurrentUserRequest]: () => false,
  // [getCurrentUserSuccess]: () => false,
});

const isLogged = createReducer(false, {
  [registerSuccess]: () => true,
  [loginSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  // [getCurrentUserRequest]: () => true,
  [logoutSuccess]: () => false,
  [refreshAuthSuccess]: () => true,
  // [registerError]: () => false,
  // [loginError]: () => false,
  // [getCurrentUserError]: () => false,
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

  [refreshAuthRequest]: () => true,
  [refreshAuthSuccess]: () => false,
  [refreshAuthError]: () => false,
});

const persistedAuth = persistReducer(persistConfig, authDataReducer);

export default combineReducers({
  authData: persistedAuth,
  isLoading,
  isLogged,
  error,
  token,
});
