// import { compose, createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
// import thunkMiddleware from "redux-thunk";
// import reducer from "./reducers";

// const loggerMiddleware = createLogger({
//   predicate: (getSatet, action) => __DEV__
// });
// function configureStore(initialState) {
//   const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware));

//   return createStore(reducer, initialState, enhancer);
// }

// export default configureStore({});

import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers";

const middleware = [thunk];

const initialState = {};

const store = createStore(
  rootReducer,
  initialState
  // compose(applyMiddleware(...middleware))
);

export default store;
