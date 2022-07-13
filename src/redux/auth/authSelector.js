export const getIsAuthenticated = state => state.auth.isLogged;
export const getIsUserAuthorizate = state => state.auth.user.token;
export const getLoading = state => state.auth.isLoading;
