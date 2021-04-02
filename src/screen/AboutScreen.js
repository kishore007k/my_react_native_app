import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutScreen = props => (
  <View style={styles.container}>
    <Text>AboutScreen</Text>
  </View>
);
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
