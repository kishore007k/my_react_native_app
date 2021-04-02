import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ContactScreen = props => (
  <View style={styles.container}>
    <Text>ContactScreen</Text>
  </View>
);
export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
