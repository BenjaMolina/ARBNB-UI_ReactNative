import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from "react-native";

import { connect } from "react-redux";
import { logIn } from "../redux/actions/loggedOut";
// import { bindActionCreators } from "redux";
// import { ActionCreators } from "../redux/actions";

import colors from "../styles/colors";

import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";

import Loader from "../components/Loader";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      validEmail: false,
      validPassword: false,
      emailAddress: "",
      loadingVisble: false
    };
  }
  handlerNextButton = () => {
    this.setState({ loadingVisble: true });

    alert(this.state.validEmail);

    setTimeout(() => {
      if (
        this.state.emailAddress === "hello@imandy.ie" &&
        this.state.validPassword
      ) {
        this.setState({ formValid: true, loadingVisble: false });
      } else {
        this.setState({ formValid: false, loadingVisble: false });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({
      formValid: true
    });
  };

  handleEmailChange = email => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({ emailAddress: email });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      } else {
        if (!emailCheckRegex.test(email)) {
          this.setState({ validEmail: false });
        }
      }
    }
  };

  handlePasswordChange = password => {
    if (!this.state.validPassword) {
      if (password.length > 4) {
        this.setState({ validPassword: true });
      }
    } else if (password.length <= 4) {
      this.setState({ validPassword: false });
    }
  };

  toggleNextButtonState = () => {
    const { validEmail, validPassword } = this.state;
    if (validEmail && validPassword) {
      return false;
    }
    return true;
  };

  render() {
    const { formValid, loadingVisble, validEmail, validPassword } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const notificationMarginTop = showNotification ? 10 : 0;
    return (
      <KeyboardAvoidingView
        style={[
          {
            backgroundColor: background
          },
          styles.wrapper
        ]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.loginHeader}>Log in</Text>
            <InputField
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
              autoFocus={true}
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
              onChangeText={this.handlePasswordChange}
              showCheckmark={validPassword}
            />
          </ScrollView>

          <NextArrowButton
            handlerNextButton={this.handlerNextButton}
            disabled={this.toggleNextButtonState()}
          />

          <View
            style={[
              {
                marginTop: notificationMarginTop
              },
              styles.notificationWrapper
            ]}
          >
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials don´t look right"
              secondLine="Please try again"
            />
          </View>
        </View>
        <Loader visible={loadingVisble} animationType="fade" />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  scrollViewWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    flex: 1
  },
  loginHeader: {
    fontSize: 34,
    color: colors.white,
    fontWeight: "300",
    marginBottom: 40
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0
  }
});

const mapStateToProps = state => ({
  loggedInStatus: state.loggedInStatus
});

// const mapDispatchToProps = dispatch => {
//   return bindActionCreators(ActionCreators, dispatch);
// };

// export default Login;
// export default connect()(Login)
export default connect(
  mapStateToProps,
  { logIn }
  // mapDispatchToProps
)(Login);
