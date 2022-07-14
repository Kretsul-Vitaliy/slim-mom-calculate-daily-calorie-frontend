import { createAction } from '@reduxjs/toolkit';

export const ProductsDateInfoRequest = createAction(
  'products/ProductsDateInfoRequest'
);
export const ProductsDateInfoSuccess = createAction(
  'products/ProductsDateInfoSuccess'
);
export const ProductsDateInfoError = createAction(
  'products/ProductsDateInfoError'
);

export const addProductRequest = createAction('products/addProductRequest');
export const addProductSuccess = createAction('products/addProductSuccess');
export const addProductError = createAction('products/addProductError');

export const deleteProductRequest = createAction(
  'products/deleteProductRequest'
);
export const deleteProductSuccess = createAction(
  'products/deleteProductSuccess'
);
export const deleteProductError = createAction('products/deleteProductError');

export const reset = createAction('products/resetDayInfo');
