import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { HOME, ACTIVITY, CART } from "../Navigation/screenNames";

import Home from "../Components/Home";
import ItemDetail from "../Components/Tabs/Featured/ItemDetail";
import ShoppingCart from "../Components/ShoppingCart";
import screeenOptions from "./screenOptions";

const { Navigator, Screen } = createStackNavigator();

export default function RootTabNavigator() {
  return (
    <Navigator screenOptions={screeenOptions}>
      <Screen name={HOME} component={Home} />
      <Screen name={ACTIVITY} component={ItemDetail} />
      <Screen name={CART} component={ShoppingCart} />
    </Navigator>
  );
}
