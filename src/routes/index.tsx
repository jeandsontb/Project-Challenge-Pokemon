import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppHome } from "./home.routes";
import { AppLogin } from "./app.routes";

const Routes = () => {
  return (
    <NavigationContainer>
      <AppLogin />
    </NavigationContainer>
  );
}

export { Routes };