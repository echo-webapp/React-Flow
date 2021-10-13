import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import messageReducer from "./Reducers/message";
import cardStateReducer from "./Reducers/cardState";
const rootReducer = combineReducers({
  messages: messageReducer,
  cardState: cardStateReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  composeEnhancers,
});
