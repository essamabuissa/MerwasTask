import React from "react";
import { List, Content, Input, Button, Text, Body, View } from "native-base";
import activities from "../Tabs/Featured/data";
import CartItem from "./CartItem";

const ShoppingCart = () => {
  const cartList = activities.map((item) => <CartItem item={item} />);
  return (
    <Content>
      <List>{cartList}</List>
      <Input
        placeholder="Discount Code"
        value=""
        style={{ backgroundColor: "white", color: "rgb(220,220,220)" }}
      ></Input>
      <Body>
        <Button
          style={{
            marginTop: -35,
            backgroundColor: "rgb(180,180,180)",
            marginLeft: 270,
            height: 24,
            borderRadius: 6,
          }}
        >
          <Text style={{ fontSize: 10 }}>Apply</Text>
        </Button>
      </Body>
      <Text style={{ fontSize: 20 }}>Total</Text>
      <View style={{ flexDirection: "row" }}>
        <Text style={{ fontSize: 11 }}>
          All prices shown are inclusive of VAT where applicable
        </Text>
        <Text style={{ marginLeft: 4 }}>AED</Text>
        <Text style={{ fontSize: 25, marginLeft: 6, color: "rgb(0,168,300)" }}>
          207
        </Text>
      </View>
      <Button
        rounded
        style={{
          height: 37,
          width: 300,
          marginLeft: 38,
          backgroundColor: "rgb(0,168,300)",
          marginTop: 30,
        }}
      >
        <Text style={{ marginLeft: 115 }}>Next</Text>
      </Button>
    </Content>
  );
};
export default ShoppingCart;
