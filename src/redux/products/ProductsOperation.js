import { toast } from 'react-toastify';
import {
  deleteCalendarProducts,
  getCalendarProducts,
  setCalendarProducts,
} from '../../services/apiService';

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

// Операция получения информации по определённому дню
export const getDay = date => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return;
  }
  dispatch(ProductsDateInfoRequest());
  try {
    const response = await getCalendarProducts(persistedToken, date);
    const { data, statisticalByDay } = response;
    const result = { data, statisticalByDay };

    dispatch(ProductsDateInfoSuccess(result));
  } catch (error) {
    dispatch(ProductsDateInfoError(error.message));
  }
};

export const addProduct =
  (name, weight, calories, date) => async (dispatch, getState) => {
    const state = getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return;
    }
    const product = { name, weight, calories, date };
    dispatch(addProductRequest());
    try {
      const { data } = await setCalendarProducts(product);
      dispatch(addProductSuccess(data));
      toast.success('Product add success 😋');
    } catch (error) {
      dispatch(addProductError(error.message));
      toast.error(error.message);
    }
  };

export const deleteProduct = dayId => async (dispatch, getState) => {
  const state = getState();
  const persistedToken = state.auth.token;
  if (!persistedToken) {
    return;
  }
  dispatch(deleteProductRequest());
  try {
    const { data } = await deleteCalendarProducts(dayId);
    dispatch(deleteProductSuccess(data));
    toast.info('👌 Delete Day success');
  } catch (error) {
    dispatch(deleteProductError(error.message));
    toast.error(error.message);
  }
};

export const resetDayInfo = () => dispatch => {
  dispatch(reset());
};
