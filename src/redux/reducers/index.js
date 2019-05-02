// import { combineReducers } from "redux";
// import * as LoggedOut from "./loggedOut";

// export default combineReducers(Object.assign(LoggedOut));

import { combineReducers } from "redux";
import loggedOut from "./loggedOut";

export default combineReducers({
  loggedInStatus: loggedOut
});
