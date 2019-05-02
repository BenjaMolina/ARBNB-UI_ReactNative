import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Icon from "react-native-vector-icons/FontAwesome";
import colors from "../../styles/colors";

import { TouchableHighlight, StyleSheet, View } from "react-native";

export default class NextArrowButton extends Component {
  render() {
    const { disabled, handlerNextButton } = this.props;
    const opacityStyle = disabled ? { opacity: 0.2 } : { opacity: 0.6 };
    return (
      <View style={styles.buttonWrapper}>
        <TouchableHighlight
          style={[opacityStyle, styles.button]}
          onPress={handlerNextButton}
          disabled={disabled}
        >
          <Icon
            name="angle-right"
            color={colors.green01}
            size={32}
            style={styles.icon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

NextArrowButton.propTypes = {
  disabled: PropTypes.bool,
  handlerNextButton: PropTypes.func
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 60,
    height: 60,
    backgroundColor: colors.white
  },
  icon: {
    marginRight: -2,
    marginTop: -2
  },
  buttonWrapper: {
    alignItems: "flex-end",
    right: 20,
    bottom: 20
  }
});
