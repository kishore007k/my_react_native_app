import React, {useContext, useEffect, useState} from 'react';
import {AuthContext} from '../AuthContext';
import auth from '@react-native-firebase/auth';
import {AppStack, AuthStack} from '../Login';

const Auth = props => {
  const [initialization, setInitialization] = useState(true);

  const {user, setUser} = useContext(AuthContext);

  console.log(user);

  const onAuthStateChanged = user => {
    setUser(user);
    if (initialization) {
      setInitialization(false);
    }
  };

  useEffect(() => {
    const subscribe = auth().onAuthStateChanged(onAuthStateChanged);
    return subscribe;
  });

  if (initialization) {
    return null;
  }

  return <>{!user ? <AuthStack /> : <AppStack />}</>;
};
export default Auth;
