import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BookmarkScreen = props => (
  <View style={styles.container}>
    <Text>BookmarksScreen</Text>
  </View>
);
export default BookmarkScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
