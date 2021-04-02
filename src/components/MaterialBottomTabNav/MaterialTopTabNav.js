import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from '../../screen/HomeScreen';
import AboutScreen from '../../screen/AboutScreen';
import ContactScreen from '../../screen/ContactScreen';
import ServiceScreen from '../../screen/ServiceScreen';
import {Image, StyleSheet} from 'react-native';

const Tab = createMaterialTopTabNavigator();

const MaterialTopTabNav = () => (
  <Tab.Navigator
    tabBarOptions={{
      showIcon: true,
      activeTintColor: '#fff',
      indicatorStyle: {height: 0},
      indicatorContainerStyle: {backgroundColor: '#e91e63'},
    }}
    tabBarPosition="bottom"
    initialRouteName="HomeScreen">
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../assets/icon/Home_white.png')}
              style={styles.icon}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="AboutScreen"
      component={AboutScreen}
      options={{
        tabBarLabel: 'About',
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../assets/icon/Profile_white.png')}
              style={styles.icon}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="ContactScreen"
      component={ContactScreen}
      options={{
        tabBarLabel: 'Contact',
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../assets/icon/Contact_white.png')}
              style={styles.icon}
            />
          );
        },
      }}
    />
    <Tab.Screen
      name="ServiceScreen"
      component={ServiceScreen}
      options={{
        tabBarLabel: 'Services',
        tabBarIcon: ({focused}) => {
          return (
            <Image
              source={require('../../assets/icon/Service_white.png')}
              style={styles.icon}
            />
          );
        },
      }}
    />
  </Tab.Navigator>
);
export default MaterialTopTabNav;

const styles = StyleSheet.create({
  barStyle: {
    backgroundColor: '#e91e63',
    fontSize: 20,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
  },
});
