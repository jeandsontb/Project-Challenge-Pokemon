import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from './src/styles/theme';
import { AuthProvider } from './src/hooks/Auth';
import { Routes } from './src/routes';
import { PokemonProvider } from './src/hooks/Pokemon';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (    

    <AuthProvider>
      <PokemonProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PokemonProvider>
    </AuthProvider>

  );
}
