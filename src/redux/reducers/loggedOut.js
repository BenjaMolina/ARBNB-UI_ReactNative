// import createReducer from "../helpers/createReducer";
// import * as types from "../actions/types";

// export const loggedInStatus = createReducer(
//   {},
//   {
//     [types.SET_LOGGED_IN_STATE](state, action) {
//       return action;
//     }
//   }
// );

import { SET_LOGGED_IN_STATE } from "../actions/types";

const initialState = {
  loggedInState: false
};

const loggedOut = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOGGED_IN_STATE:
      return {
        loggedInState: action.loggedInState
      };

    default:
      return state;
  }
};

export default loggedOut;
