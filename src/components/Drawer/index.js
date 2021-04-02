import React from 'react';

import {createDrawerNavigator} from '@react-navigation/drawer';

import AboutScreen from '../../screen/AboutScreen';
import ContactScreen from '../../screen/ContactScreen';
import MaterialBottomTabNav from '../MaterialBottomTabNav';

const Drawer = createDrawerNavigator();

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#e4f6ff'}}
      screenOptions={{headerStyle: {backgroundColor: '#49bfff'}}}>
      <Drawer.Screen
        name="MaterialBottomTabNav"
        component={MaterialBottomTabNav}
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
    </Drawer.Navigator>
  );
};
export default DrawerNav;
