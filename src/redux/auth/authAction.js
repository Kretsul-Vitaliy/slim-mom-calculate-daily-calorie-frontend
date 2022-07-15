import { createAction } from '@reduxjs/toolkit';
// register new user
export const registerRequest = createAction('auth/registerRequest');
export const registerSuccess = createAction('auth/registerSuccess');
export const registerError = createAction('auth/registerError');
// login
export const loginRequest = createAction('auth/loginRequest');
export const loginSuccess = createAction('auth/loginSuccess');
export const loginError = createAction('auth/loginError');
// logout
export const logoutRequest = createAction('auth/logoutRequest');
export const logoutSuccess = createAction('auth/logoutSuccess');
export const logoutError = createAction('auth/logoutError');
// get current user
export const getCurrentUserRequest = createAction('auth/getCurrentUserRequest');
export const getCurrentUserSuccess = createAction('auth/getCurrentUserSuccess');
export const getCurrentUserError = createAction('auth/getCurrentUserError');
// update user
export const updateUserRequest = createAction('auth/updateUserRequest');
export const updateUserSuccess = createAction('auth/updateUserSuccess');
export const updateUserError = createAction('auth/updateUserError');
