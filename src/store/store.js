import messageReducer from "./Reducers/message";
import cardStateReducer from "./Reducers/cardState";
import labelStateReducer from "./Reducers/labelState";
import flowNameReducer from "./Reducers/flowName";
import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  messages: messageReducer,
  cardState: cardStateReducer,
  labelState: labelStateReducer,
  flowName: flowNameReducer,
});
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
const storeObject = { store, persistor };
export default storeObject;
