export const date = state => state.dayProducts.dayInfo.date;
export const dateId = state => state.dayProducts.dayInfo.id;
export const nameProduct = state => state.dayProducts.dayInfo.nameProduct;
export const calories = state => state.dayProducts.dayInfo.calories;
export const weight = state => state.dayProducts.dayInfo.weight;
export const owner = state => state.dayProducts.dayInfo.owner;
export const getLoading = state => state.dayProducts.isLoading;

// statisticalDay
export const getDate = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.date;
export const getkcalLeft = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.kcalLeft;
export const kcalConsumed = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.kcalConsumed;
export const percentsOfDailyRate = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.percentsOfDailyRate;
export const dailyRate = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.dailyRate;
export const getStatisticalDayLoading = state => state?.dayProducts?.isLoading;
// ProductListDay
export const getProductList = state =>
  state?.dayProducts?.dayInfo?.statisticalByDay?.data;
