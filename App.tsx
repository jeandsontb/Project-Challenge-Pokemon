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

import { AuthProvider } from './src/hooks/Auth';
import theme from './src/styles/theme';
import themeNight from './src/styles/themeNight';
import { Routes } from './src/routes';
import { ThemeProviderFolks } from './src/hooks/Theme';

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
    <ThemeProvider theme={theme}>

      <AuthProvider>
        <ThemeProviderFolks>
          <Routes />
        </ThemeProviderFolks>
      </AuthProvider>

    </ThemeProvider>
  );
}
