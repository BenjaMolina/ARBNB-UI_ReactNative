import React, { Component } from "react";

import LoggedOut from "./src/screens/LoggedOut";
import Login from "./src/screens/Login";
import ForgotPassword from "./src/screens/ForgotPassword";

import { Provider } from "react-redux";
import store from "./src/redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login />
      </Provider>
    );
  }
}

export default App;
