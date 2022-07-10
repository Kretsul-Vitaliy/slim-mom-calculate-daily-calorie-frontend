import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

export const tokenKey = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Authorization

export const signUpUser = async (body) => {
  const { data } = await axios.post('auth/signup', body);
  tokenKey.set(data.token);
  return data;
};

export const logInUser = async (body) => {
  const { data } = await axios.post('auth/login', body);
  tokenKey.set(data.token);
  return data;
};

export const logOutUser = async () => {
  const { data } = await axios.post('auth/logout');
  tokenKey.unset();
  return data;
};

export const userInfoCurrent = async (persistedToken) => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.get('users/current');
    return data;
  } catch (error) {
    return error;
  }
};

// Products

export const getDataProducts = async (query) => {
  const { data } = await axios.get(`products?search=${query}`);
  return data;
};


// https://slimcalculatebackend.herokuapp.com/api/v1/products/20.07.2022