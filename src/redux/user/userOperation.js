import { userInfoCurrent } from '../../services/apiService';

import {
  getUserInfoRequest,
  getUserInfoSuccess,
  getUserInfoError,
} from './userAction';

export const getUserInfoCurrent = persistedToken => async dispatch => {
  dispatch(getUserInfoRequest());
  try {
    const { data } = await userInfoCurrent(persistedToken);
    dispatch(getUserInfoSuccess(data));
  } catch (error) {
    dispatch(getUserInfoError(error.message));
  }
};
