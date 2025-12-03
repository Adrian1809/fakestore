import shopReducer from "@/redux/features/shopSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { shopAPI } from "../api/shopAPISlice";
import storage from "./sync_storage";

const persistConfig = {
  key: "Bergold",
  storage,
  whitelist: ["shop"], 
};

const reducers: any = combineReducers({
  [shopAPI.reducerPath]: shopAPI.reducer,
  shop: shopReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const makeConfiguredStore: any = (reducer: any) =>
  configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware: any) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(shopAPI.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(reducers);
  } else {
    
    return makeConfiguredStore(persistedReducer);
  }
};

export const store = makeStore();
export type RootState = ReturnType<typeof store.getState>;
export type AppStore = ReturnType<typeof makeStore>;
export const wrapper = createWrapper<AppStore>(makeStore, { debug: false });
