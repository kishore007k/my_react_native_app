import React from 'react';

// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../../screen/HomeScreen';
import AboutScreen from '../../screen/AboutScreen';
import ContactScreen from '../../screen/ContactScreen';
import ServiceScreen from '../../screen/ServiceScreen';
import {Image, StyleSheet} from 'react-native';

// const Tab = createMaterialTopTabNavigator();
const Tab = createMaterialBottomTabNavigator();

const MaterialBottomTabNav = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    activeColor="#fff"
    barStyle={styles.barStyle}>
    <Tab.Screen
      name="HomeScreen"
      component={HomeScreen}
      options={{
        tabBarColor: '#00b698',
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
        tabBarColor: '#08b9d8',
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
        tabBarColor: '#e43468',
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
        tabBarColor: '#09a9f3',
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
export default MaterialBottomTabNav;

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
