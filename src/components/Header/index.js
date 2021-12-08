import React from 'react';
import {View, StyleSheet} from 'react-native';
import {APP_PADDING} from '../Padding';

const Header = ({children, style, leftContent, rightContent}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.leftContent}>{leftContent}</View>
      <View style={styles.rightContent}>{rightContent}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: APP_PADDING,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftContent: {
    flex: 0.85,
  },
  rightContent: {
    flex: 0.15,
    alignItems: 'flex-end',
  },
});
