import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './userAction';

const initialUserInfo = {
  userData: {
    currentWeight: null,
    height: null,
    age: null,
    desiredWeight: null,
    bloodType: null,
    dailyRate: null,
  },
  days: [],
  _id: '',
};

const userInfo = createReducer(initialUserInfo, {
  [getUserInfoSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [getUserInfoRequest]: () => false,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => true,
});

const isLoading = createReducer(false, {
  [getUserInfoRequest]: () => true,
  [getUserInfoSuccess]: () => false,
  [getUserInfoError]: () => false,
});

export default combineReducers({
  userInfo,
  error,
  isLoading,
});
