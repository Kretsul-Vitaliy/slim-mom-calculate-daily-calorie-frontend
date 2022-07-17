export const getIsAuthenticated = state => state?.auth?.isLogged;
export const getIsUserAuthorizate = state => state?.auth?.token;
export const getIsUserRefreshToken = state =>
  state?.auth?.authData?.refreshToken;
export const getSid = state => state?.auth?.authData?.sid;
export const getLoading = state => state.auth.isLoading;
// export const getUserName = state => state.auth.user.name;
export const getUser = state => state?.auth?.authData?.user;
