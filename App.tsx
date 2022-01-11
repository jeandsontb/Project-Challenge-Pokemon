import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import React from 'react';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import { AuthProvider } from './src/hooks/Auth';
import { PokemonProvider } from './src/hooks/Pokemon';
import { ThemeProviderFolks } from './src/hooks/Theme';
import { Routes } from './src/routes';

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
        <ThemeProviderFolks>
          <Routes />
        </ThemeProviderFolks>
      </PokemonProvider>
    </AuthProvider>

  );
}
