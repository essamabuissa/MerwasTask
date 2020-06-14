import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./Navigation/index";

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
