import React, { Component } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  StyleSheet,
  ScrollView
} from "react-native";

import colors from "../styles/colors";
import InputField from "../components/form/InputField";
import Notification from "../components/Notification";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Loader from "../components/Loader";

export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true,
      loadingVisible: false,
      validEmail: false,
      emailAddress: ""
    };
  }

  handleEmailChange = email => {
    const emailCheckRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    this.setState({
      emailAddress: email
    });

    if (!this.state.validEmail) {
      if (emailCheckRegex.test(email)) {
        this.setState({ validEmail: true });
      }
    } else {
      if (!emailCheckRegex.test(email)) {
        this.setState({ validEmail: false });
      }
    }
  };

  goToNextStep = () => {
    this.setState({ loadingVisible: true });
    setTimeout(() => {
      if (this.state.emailAddress === "123@email.com") {
        this.setState({ loadingVisible: false, formValid: true });
      } else {
        this.setState({ loadingVisible: false, formValid: false });
      }
    }, 2000);
  };

  handleCloseNotification = () => {
    this.setState({ formValid: true });
  };

  render() {
    const { loadingVisible, formValid, validEmail } = this.state;
    const background = formValid ? colors.green01 : colors.darkOrange;
    const showNotification = formValid ? false : true;
    return (
      <KeyboardAvoidingView
        style={[{ backgroundColor: background }, styles.wrapper]}
        behavior="padding"
      >
        <View style={styles.scrollViewWrapper}>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.forgotPasswordHeading}>
              Forgot your Password
            </Text>
            <Text style={styles.forgotPasswordSubHeading}>
              Enter your email to find your account
            </Text>
            <InputField
              customStyle={{ marginBottom: 30 }}
              textColor={colors.white}
              labelText="EMAIL ADDRESS"
              labelTextSize={14}
              labelColor={colors.white}
              borderBottomColor={colors.white}
              inputType="email"
              onChangeText={this.handleEmailChange}
              showCheckmark={validEmail}
            />
          </ScrollView>
          <NextArrowButton
            disabled={!validEmail}
            handlerNextButton={this.goToNextStep}
          />
          <View style={styles.notificationWrapper}>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="No account exists for the requested"
              secondLine="Email address."
            />
          </View>
        </View>
        <Loader visible={loadingVisible} animationType="fade" />
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
  forgotPasswordHeading: {
    fontSize: 28,
    color: colors.white,
    fontWeight: "300"
  },
  forgotPasswordSubHeading: {
    color: colors.white,
    fontWeight: "600",
    fontSize: 15,
    marginTop: 10,
    marginBottom: 60
  },
  notificationWrapper: {
    position: "absolute",
    bottom: 0
  }
});
