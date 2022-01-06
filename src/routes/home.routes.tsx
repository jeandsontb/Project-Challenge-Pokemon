import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const { Navigator, Screen } = createNativeStackNavigator();

import { Favorites } from '../screens/Favorites';
import { Search } from '../screens/Search';
import { AllPosts } from '../screens/AllPosts';

const AppHome = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen 
        name="Favorites"
        component={Favorites}
      />

      <Screen
        name="Search"
        component={Search}
      />

      <Screen 
        name="AllPosts"
        component={AllPosts}
      />
    </Navigator>
  )
}

export { AppHome };