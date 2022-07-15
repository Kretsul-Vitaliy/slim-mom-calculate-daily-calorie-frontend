import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'reduxjs-toolkit-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';
import authReducer from './auth/authReducer';
import userReducer from './user/userReducer';
import dailyCaloriesReducer from './dailyCalories/dailyCaloriesReducer';
import ProductsReducer from './products/ProductsReducer';

const authPersistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
  stateReconciler: autoMergeLevel1,
};
const persistedReducer = persistReducer(authPersistConfig, authReducer);

const reducer = combineReducers({
  auth: persistedReducer,
  user: userReducer,
  dailyCalories: dailyCaloriesReducer,
  dayProducts: ProductsReducer,
});
const logger = createLogger({
  collapsed: logEntry => !logEntry.error,
  timestamp: false,
});
const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        /* ignore persistance actions */
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),

  // devTools: process.env.NODE_ENV === 'development',
});

export default store;
export const persistor = persistStore(store);
