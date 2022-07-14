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
export const getDay = () => async (dispatch, getState, date) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  dispatch(ProductsDateInfoRequest());
  try {
    const response = await getCalendarProducts(persistedToken, date);
    dispatch(ProductsDateInfoSuccess(response.data));
  } catch (error) {
    dispatch(ProductsDateInfoError(error.message));
  }
};

export const addProduct =
  (name, weight, calories, date) => async (dispatch, getState) => {
    const {
      auth: { token: persistedToken },
    } = getState();

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
  const {
    auth: { token: persistedToken },
  } = getState();

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
