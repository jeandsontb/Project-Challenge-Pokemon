import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';
import { Login } from '../screens/Login';

const AppRoutes = () => {
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

      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}

export { AppRoutes };