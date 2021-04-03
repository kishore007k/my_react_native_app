/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import AboutScreen from '../../screen/AboutScreen';
import ContactScreen from '../../screen/ContactScreen';
import MaterialBottomTabNav from '../MaterialBottomTabNav';
import DrawerContents from '../DrawerContents';
import ServiceScreen from '../../screen/ServiceScreen';
import HomeScreen from '../../screen/HomeScreen';
import BookmarkScreen from '../../screen/BookmarkScreen';
import SettingsScreen from '../../screen/SettingsScreen';
import ProfileScreen from '../../screen/ProfileScreen';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContents {...props} />}
      drawerStyle={{backgroundColor: '#e4f6ff'}}
      screenOptions={{headerStyle: {backgroundColor: '#49bfff'}}}>
      <Drawer.Screen
        name="MaterialBottomTabNav"
        component={MaterialBottomTabNav}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Service"
        component={ServiceScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{headerShown: true}}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: true}}
      />
    </Drawer.Navigator>
  );
};
export default DrawerNav;
