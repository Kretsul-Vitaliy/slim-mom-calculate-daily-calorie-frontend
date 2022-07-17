export const getDailyCaloriesPublic = state =>
  state.dailyCalories.dailyCalories.dailyCalories; // Лимит калорий, публичный
export const getLoading = state => state.dailyCalories.isLoading;
export const getDailyNormCaloriesPrivate = state =>
  state?.dailyCalories?.dailyCalories?._doc?.calories;
export const getCategoriesPublic = state =>
  state?.dailyCalories?.dailyCalories?.categories;
export const getCategoriesPrivate = state =>
  state?.dailyCalories?.dailyCalories?._doc?.categories;
