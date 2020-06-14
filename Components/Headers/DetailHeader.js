import React, { Component } from "react";
import { Icon, Item, Input, Header, Body, Button } from "native-base";
import { Dropdown } from "react-native-material-dropdown";
import Flag from "react-native-flags";
import { CART } from "../../Navigation/screenNames";

const HomeHeader = ({ navigation }) => {
  let data = [
    {
      value: <Flag code="JO" size={16} name="Jordan" />,
    },
    {
      value: <Flag code="KW" size={16} name="Jordan" />,
    },
    {
      value: <Flag code="SA" size={16} name="Jordan" />,
    },
    {
      value: <Flag code="LB" size={16} name="Jordan" />,
    },
    {
      value: <Flag code="EG" size={16} name="Jordan" />,
    },
    ,
  ];

  return (
    <Header searchBar style={{ marginTop: -25 }}>
      <Body style={{ marginBottom: 10 }}>
        <Dropdown
          label="Country"
          data={data}
          style={{
            marginLeft: 60,
            paddingTop: 100,
            marginRight: 170,
          }}
        />
      </Body>

      <Button
        style={{
          backgroundColor: "default",
          marginRight: -17,
          marginTop: 1,
        }}
        onPress={() => navigation.navigate(CART)}
      >
        <Icon
          name="shopping-cart"
          type="MaterialIcons"
          style={{ marginTop: 7, color: "#FF7F50" }}
        />
      </Button>

      <Icon
        name="share"
        type="Fontisto"
        style={{ marginTop: 10, color: "rgb(0,168,300)" }}
      />
    </Header>
  );
};

export default HomeHeader;
