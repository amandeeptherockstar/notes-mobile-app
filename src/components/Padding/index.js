import React from 'react';
import {View, StyleSheet} from 'react-native';

export const APP_PADDING = 16;

const Padding = ({children, style}) => {
  return <View style={[styles.container, style]}>{children}</View>;
};

export default Padding;

const styles = StyleSheet.create({
  container: {
    padding: APP_PADDING,
  },
});
