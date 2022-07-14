import { createAction } from '@reduxjs/toolkit';

export const dailyCaloriesRequest = createAction(
  'dailyCalories/public/dailyCaloriesRequest'
);
export const dailyCaloriesSuccess = createAction(
  'dailyCalories/public/dailyCaloriesSuccess'
);
export const dailyCaloriesError = createAction(
  'dailyCalories/public/dailyCaloriesError'
);

export const dailyCaloriesAuthRequest = createAction(
  'dailyCalories/dailyCaloriesAuthRequest'
);
export const dailyCaloriesAuthSuccess = createAction(
  'dailyCalories/dailyCaloriesAuthSuccess'
);
export const dailyCaloriesAuthError = createAction(
  'dailyCalories/dailyCaloriesAuthError'
);
