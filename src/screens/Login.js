import React, { Component } from "react";
import { PropTypes } from "prop-types";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";

import InputField from "../components/form/InputField";
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from "../components/Notification";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formValid: true
    };
  }
  handlerNextButton = () => {
    alert("Handler Next");
  };

  handleCloseNotification = () => {
    this.setState({
      formValid: true
    });
  };

  render() {
    const { formValid } = this.state;
    const showNotification = formValid ? false : true;
    const background = formValid ? colors.green01 : colors.darkOrange;
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
            />
            <InputField
              labelText="PASSWORD"
              labelTextSize={14}
              labelColor={colors.white}
              textColor={colors.white}
              borderBottomColor={colors.white}
              inputType="password"
              customStyle={{ marginBottom: 30 }}
            />
          </ScrollView>
          <View style={styles.nextButton}>
            <NextArrowButton handlerNextButton={this.handlerNextButton} />
          </View>

          <View>
            <Notification
              showNotification={showNotification}
              handleCloseNotification={this.handleCloseNotification}
              type="Error"
              firstLine="Those credentials don´t look right"
              secondLine="Please try again"
            />
          </View>
        </View>
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
  nextButton: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});
