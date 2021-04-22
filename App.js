import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnBoardingScreen from './src/screen/OnBoardingScreen';

import AsyncStorage from '@react-native-community/async-storage';

import Auth from './src/components/Auth/Auth';
import {AuthProvider} from './src/components/AuthContext';

import {GoogleSignin} from '@react-native-google-signin/google-signin';

const Stack = createStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState();

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });

    GoogleSignin.configure({
      webClientId:
        '346399953229-crtumc075n27jlojr9ntoh42u4dvf0ht.apps.googleusercontent.com',
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <AuthProvider>
        <Auth />
      </AuthProvider>
    );
  }
};
export default App;
