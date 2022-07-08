export const getUserId = (state) => state.user.userInfo._id; // ID user
export const getUserNickName = (state) => state.user.userInfo.name; // name user
export const getUserBlood = (state) => state.user.userInfo.userData.bloodType; // group blood user
