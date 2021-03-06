import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Login } from '../screens/Login';

const AppLogin = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Login"
        component={Login}
      />
    </Navigator>
  )
}

export { AppLogin };