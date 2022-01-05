import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Home } from '../screens/Home';

const AppHome = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Home"
        component={Home}
      />
    </Navigator>
  )
}

export { AppHome };