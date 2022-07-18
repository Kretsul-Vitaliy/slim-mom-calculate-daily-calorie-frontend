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

export const resetToken = {
  set(resetToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${resetToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

// Authorization

export const signUpUser = async body => {
  const { data } = await axios.post(
    'https://slimcalculatebackend.herokuapp.com/api/v1/auth/signup',
    body
  );
  tokenKey.set(data.token);
  return data;
};

export const logInUser = async body => {
  const { data } = await axios.post(
    'https://slimcalculatebackend.herokuapp.com/api/v1/auth/login',
    body
  );
  tokenKey.set(data.token);
  return data;
};
export const refreshUser = async body => {
  const { data } = await axios.post(
    'https://slimcalculatebackend.herokuapp.com/api/v1/auth/refresh',
    body
  );
  tokenKey.set(data.token);
  return data;
};

export const logOutUser = async persistedToken => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  const { data } = await axios.post(
    'https://slimcalculatebackend.herokuapp.com/api/v1/auth/logout'
  );
  tokenKey.unset();
  return data;
};

export const userInfoCurrent = async persistedToken => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.get(
      'https://slimcalculatebackend.herokuapp.com/api/v1/users/current'
    );
    return data;
  } catch (error) {
    tokenKey.unset();
    return error;
  }
};

export const updateUser = async user => {
  const { data } = await axios.put(
    'https://slimcalculatebackend.herokuapp.com/api/v1/users/update',
    user
  );

  return data.result;
};

// Products

export const getDataProducts = async query => {
  try {
    const { data } = await axios.get(
      `https://slimcalculatebackend.herokuapp.com/api/v1/products?search=${query}`
    );
    return data;
  } catch (error) {
    return error;
  }
};

export const getCalendarProducts = async (persistedToken, date) => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.get(
      `https://slimcalculatebackend.herokuapp.com/api/v1/products/${date}`
    );
    return data;
  } catch (error) {
    tokenKey.unset();
    return error;
  }
};

export const setCalendarProducts = async (
  name,
  weight,
  calories,
  date,
  persistedToken
) => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.post(
      'https://slimcalculatebackend.herokuapp.com/api/v1/products',
      {
        nameProduct: name,
        weight: weight,
        calories: calories,
        date: date,
      }
    );
    return data;
  } catch (error) {
    tokenKey.unset();
    return error;
  }
};

export const deleteCalendarProducts = async (persistedToken, dayId) => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.delete(`products/${dayId}`);
    return data;
  } catch (error) {
    tokenKey.unset();
    return error;
  }
};

// daily guard
export const dailyCaloriesGuard = async (values, persistedToken) => {
  if (!persistedToken) {
    throw Error('user');
  }
  tokenKey.set(persistedToken);
  try {
    const { data } = await axios.post(
      'https://slimcalculatebackend.herokuapp.com/api/v1/dailycalories',
      values
    );
    return data;
  } catch (error) {
    tokenKey.unset();
  }
};
// daily public
export const dailyCaloriesPublic = async values => {
  const { data } = await axios.post(
    'https://slimcalculatebackend.herokuapp.com/api/v1/dailycalories/public',
    values
  );
  return data;
};
