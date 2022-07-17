import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import {
  ProductsDateInfoRequest,
  ProductsDateInfoSuccess,
  ProductsDateInfoError,
  addProductRequest,
  addProductSuccess,
  addProductError,
  deleteProductRequest,
  deleteProductSuccess,
  deleteProductError,
  reset,
} from './ProductsAction';

const initial = {
  nameProduct: '',
  id: '',
  date: '',
  calories: null,
  weight: null,
  owner: '',
};

const dayInfo = createReducer(initial, {
  [ProductsDateInfoSuccess]: (_, { payload }) => payload,
  [addProductSuccess]: (state, { payload }) => ({
    ...state,
    nameProduct: payload.nameProduct,
    weight: payload.weight,
    calories: payload.calories,
  }),
  [deleteProductSuccess]: (state, { payload }) =>
    state.filter(item => {
      return item._id !== payload.data._id;
    }),
  [reset]: () => initial,
});

const error = createReducer(null, {
  [ProductsDateInfoError]: (_, { payload }) => payload,
  [addProductError]: (_, { payload }) => payload,
  [deleteProductError]: (_, { payload }) => payload,

  [ProductsDateInfoRequest]: () => null,
  [ProductsDateInfoSuccess]: () => null,

  [addProductRequest]: () => null,
  [addProductSuccess]: () => null,

  [deleteProductRequest]: () => null,
  [deleteProductSuccess]: () => null,
});

// Cостояние спиннера при запросах
const isLoading = createReducer(false, {
  [ProductsDateInfoRequest]: () => true,
  [ProductsDateInfoSuccess]: () => false,
  [ProductsDateInfoError]: () => false,

  [addProductRequest]: () => true,
  [addProductSuccess]: () => false,
  [addProductError]: () => false,

  [deleteProductRequest]: () => true,
  [deleteProductSuccess]: () => false,
  [deleteProductError]: () => false,
});

export default combineReducers({
  dayInfo,
  error,
  isLoading,
});
