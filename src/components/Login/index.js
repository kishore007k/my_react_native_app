import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../../screen/LoginScreen';
import SignUpScreen from '../../screen/SignUpScreen';
import DrawerNav from '../Drawer';

const LoginStack = createStackNavigator();

export const AppStack = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="DrawerNav" component={DrawerNav} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

export const AuthStack = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator headerMode="none">
        <LoginStack.Screen name="Login" component={LoginScreen} />
        <LoginStack.Screen name="SignUp" component={SignUpScreen} />
        <LoginStack.Screen name="DrawerNav" component={DrawerNav} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};
