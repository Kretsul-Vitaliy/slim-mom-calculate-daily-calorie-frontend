import { userInfoCurrent } from '../../services/apiService';
import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './userAction';

export const getUserInfoCurrent = () => async dispatch => {
  dispatch(getUserInfoRequest());

  try {
    const { data } = await await userInfoCurrent();
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
