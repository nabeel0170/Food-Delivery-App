import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, Reducer } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import { PersistPartial } from 'redux-persist/es/persistReducer';

import { IAppReduxState } from '@/store/types/App.types';

import appSlice from './slices/appSlice';
import categoriesSlice, { CategoriesState } from './slices/categoriesSlice';
import restaurantsSlice, { RestaurantsState } from './slices/restaurantsSlice';

export type ICombinedReducer = {
  app: IAppReduxState;
  restaurants: RestaurantsState;
  categories: CategoriesState;
};

export const rootReducer: Reducer<ICombinedReducer> = combineReducers({
  app: appSlice.reducer,
  restaurants: restaurantsSlice.reducer,
  categories: categoriesSlice.reducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['app', 'restaurants', 'categories'],
    transforms: [createBlacklistFilter('', [])],
  },
  rootReducer,
);

export const setupStore = (
  preloadedState?: ICombinedReducer & PersistPartial,
) =>
  configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
      const middleware = getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
      });
      return middleware;
    },

    preloadedState,
  });

export const store = setupStore();
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
