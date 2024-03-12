import { combineReducers, configureStore } from '@reduxjs/toolkit';
import auth from '../reducer/auth';
import products from '../reducer/products';
import categories from '../reducer/categories';
import option from '../reducer/option';
import subOption from '../reducer/subOption';
import { persistStore, persistReducer } from 'redux-persist';
import orderReducer from '../../_redux/reducer/orders';

import storage from 'redux-persist/lib/storage';
import returns from '../reducer/returns';
import profile from '../reducer/profile';
import globalStore from '../reducer/store';
const persistConfig = {
  key: 'root', // root key for the persisted state
  storage,
};
const persistedReducer = persistReducer(persistConfig, orderReducer);

const combinedReducer = combineReducers({
  auth,
  products,
  categories,
  option,
  subOption,
  orders: persistedReducer,
  returns,
  profile,
  globalStore,
});

export const store = configureStore({
  reducer: combinedReducer,
});
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
