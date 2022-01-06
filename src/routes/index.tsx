import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppHome } from "./home.routes";
import { AppLogin } from "./app.routes";
import { useAuth } from "../hooks/Auth";

const Routes = () => {

  const { token } = useAuth();

  return (
    <NavigationContainer>
      { token ? <AppHome /> : <AppLogin /> }
    </NavigationContainer>
  );
}

export { Routes };