export const getUserId = state => state.user.userInfo._id; // ID user
export const getUserNickName = state => state.user.userInfo.name; // name user
export const getUserBlood = state => state.user.userInfo.userData.bloodType; // group blood user
export const getDays = state => state.user.userInfo.days; // Дни юзера
export const getNotAllowedProductsAll = state =>
  state.user.userInfo.userData.notAllowedProductsAll; //

// statistical
export const getUserCalories = state =>
  state?.user?.userInfo?.userData?.calories;
export const getUserCategories = state =>
  state?.user?.userInfo?.userData?.categories;
