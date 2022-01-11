import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components";

import { AppHome } from "./home.routes";
import { AppLogin } from "./app.routes";
import { useAuth } from "../hooks/Auth";
import theme from "../styles/theme";
import { useThemeFolks } from '../hooks/Theme';

const Routes = () => {

  const { token } = useAuth();

  return (
    <NavigationContainer>
      { token ? <AppHome /> : <AppLogin /> }
    </NavigationContainer>
  );
}

export { Routes };