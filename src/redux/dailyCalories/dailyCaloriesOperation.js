import {
  dailyCaloriesRequest,
  dailyCaloriesSuccess,
  dailyCaloriesError,
  dailyCaloriesAuthRequest,
  dailyCaloriesAuthSuccess,
  dailyCaloriesAuthError,
} from './dailyCaloriesAction';
import { toast } from 'react-toastify';
import {
  dailyCaloriesGuard,
  dailyCaloriesPublic,
} from '../../services/apiService';

export const dailyCalories = values => async dispatch => {
  dispatch(dailyCaloriesRequest());
  try {
    values.bloodType = Number(values.bloodType);
    const response = await dailyCaloriesPublic(values);
    dispatch(dailyCaloriesSuccess(response.data));
  } catch (error) {
    dispatch(dailyCaloriesError(error.message));
  }
};

export const dailyCaloriesAuth = (values, userId) => async dispatch => {
  dispatch(dailyCaloriesAuthRequest());
  try {
    values.bloodType = Number(values.bloodType);
    const response = await dailyCaloriesGuard(values, userId);
    dispatch(dailyCaloriesAuthSuccess(response.data));
    toast.success('update 👍');
  } catch (error) {
    dispatch(dailyCaloriesAuthError(error.message));
    toast.error(error.message);
  }
};
