import { configureStore } from "@reduxjs/toolkit";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducer from "./reducer";
// import { applyMiddleware } from 'redux';

// const middleware = [thunk];

const store = configureStore({
  reducer: reducer,
  middleware: [thunk],
});

export default store;

// configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//     devTools: process.env.NODE_ENV !== 'production',
//     preloadedState,
//     enhancers: [batchedSubscribe(debounceNotify)],
//   })
