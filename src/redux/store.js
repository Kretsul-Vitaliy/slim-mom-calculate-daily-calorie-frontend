import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/authReducer';
import user from './user/userReducer';

const authConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    user,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),

  devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);