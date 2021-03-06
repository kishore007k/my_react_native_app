/* eslint-disable no-shadow */
import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../AuthContext';
import auth from '@react-native-firebase/auth';
import {AppStack, AuthStack} from '../Login';

const Auth = () => {
  const [initialization, setInitialization] = useState(true);
  const {user, setUser} = useContext(AuthContext);

  console.log(user);

  const onAuthStateChanged = userData => {
    setUser(userData);
    if (initialization) {
      setInitialization(false);
    }
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (initialization) {
    return null;
  }

  return <>{!user ? <AuthStack /> : <AppStack />}</>;
};
export default Auth;
