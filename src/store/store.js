import { configureStore, combineReducers, compose } from "@reduxjs/toolkit";
import messageReducer from "./Reducers/message";
import cardStateReducer from "./Reducers/cardState";
import EdgeReducer from "./Reducers/edges";

const rootReducer = combineReducers({
  messages: messageReducer,
  cardState: cardStateReducer,
  edges: EdgeReducer,
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
