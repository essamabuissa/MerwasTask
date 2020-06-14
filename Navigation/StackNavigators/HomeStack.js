import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { FEATURED, NEWIN, FOOD, ACTIVITY, CART } from "../screenNames";
import Featured from "../../Components/Tabs/Featured";
import NewIn from "../../Components/Tabs/NewIn";
import ItemDetail from "../../Components/Tabs/Featured/ItemDetail";
import ShoppingCart from "../../Components/ShoppingCart";

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name={FEATURED} component={Featured} />
      <Screen name={NEWIN} component={NewIn} />
      <Screen name={FOOD} component={Food} />
      <Screen name={CART} component={ShoppingCart} />
    </Navigator>
  );
};
