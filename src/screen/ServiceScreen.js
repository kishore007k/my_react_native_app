import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ServiceScreen = props => (
  <View style={styles.container}>
    <Text>ServiceScreen</Text>
  </View>
);
export default ServiceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
