import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import cartSlice from "./cart/cart-slice";
import storage from "redux-persist/lib/storage";
import productsSlice from "./slices/products-slice";
import authSlice from "./slices/auth-slice";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  cart: cartSlice,
  products: productsSlice,
  auth: authSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);
export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
