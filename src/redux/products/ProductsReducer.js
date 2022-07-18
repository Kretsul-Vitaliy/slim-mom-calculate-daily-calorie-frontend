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

// const initial = {
//   nameProduct: '',
//   id: '',
//   date: '',
//   calories: null,
//   weight: null,
//   owner: '',
// };

const dayInfo = createReducer(
  {},
  {
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
    [reset]: () => ({}),
  }
);

// const statisticalByDay = createReducer(
//   {},
//   {
//     [ProductsDateInfoSuccess]: (_, { payload }) => payload,
//     [addProductSuccess]: (state, { payload }) => ({
//       ...state.statisticalByDay,
//       statisticalByDay: payload.statisticalByDay,
//     }),
//     [deleteProductSuccess]: (_, { payload }) => payload,
//     [reset]: () => ({}),
//   }
// );

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
  // statisticalByDay,
  error,
  isLoading,
});
