import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  dailyCaloriesRequest,
  dailyCaloriesSuccess,
  dailyCaloriesError,
  dailyCaloriesAuthRequest,
  dailyCaloriesAuthSuccess,
  dailyCaloriesAuthError,
} from './dailyCaloriesAction';

const initial = {
  nameProduct: '',
  weight: null,
  calories: null,
  owner: {},
  date: '',
};

const dailyCalories = createReducer(initial, {
  [dailyCaloriesSuccess]: (_, { payload }) => payload,
  [dailyCaloriesAuthSuccess]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [dailyCaloriesError]: (_, { payload }) => payload,
  [dailyCaloriesAuthError]: (_, { payload }) => payload,

  [dailyCaloriesRequest]: () => false,
  [dailyCaloriesAuthSuccess]: () => false,

  [dailyCaloriesAuthRequest]: () => false,
  [dailyCaloriesAuthSuccess]: () => false,
});

// Cостояние спиннера при запросах
const isLoading = createReducer(false, {
  [dailyCaloriesRequest]: () => true,
  [dailyCaloriesSuccess]: () => false,
  [dailyCaloriesError]: () => false,

  [dailyCaloriesAuthRequest]: () => true,
  [dailyCaloriesAuthSuccess]: () => false,
  [dailyCaloriesAuthError]: () => false,
});

export default combineReducers({
  dailyCalories,
  error,
  isLoading,
});
