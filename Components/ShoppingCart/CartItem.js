import React, { Component } from "react";
import {
  Card,
  CardItem,
  Text,
  Content,
  Left,
  Right,
  View,
  Body,
  Icon,
} from "native-base";
import { ImageBackground } from "react-native";
import Spinner from "react-native-number-spinner";
import styles from "../Tabs/Featured/styles";
import { Divider } from "react-native-elements";
import Dash from "react-native-dash";

class CartItem extends Component {
  state = {
    quantity: 1,
  };
  render() {
    const { item } = this.props;
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <ImageBackground
                source={item.image}
                style={{ width: 120, height: 75 }}
              ></ImageBackground>
              <Right>
                <Text
                  style={{
                    marginBottom: 3,
                    marginRight: 60,
                    fontSize: 12,
                  }}
                >
                  {item.name}
                </Text>
                <Left>
                  <Text
                    style={{
                      marginBottom: -20,
                      marginRight: 42,
                      fontSize: 12,
                      color: "rgb(180,180,180)",
                      justifyContent: "flex-start",
                    }}
                  >
                    {item.maindescreption}
                  </Text>
                </Left>
              </Right>
            </Left>
            <Divider style={{ backgroundColor: "blue" }} />
          </CardItem>
          <Left style={{ marginLeft: 50 }}>
            <Text style={{ fontSize: 15, color: "rgb(180,180,180)" }}>
              Select the quantity
            </Text>
            <Spinner
              style={{ marginTop: 0 }}
              width={20}
              height={60}
              max={10}
              min={2}
              step={1}
              color="rgb(220,220,220)"
              value={this.state.quantity}
              showBorder
              onChange={(num) => {
                this.setState({ quantity: num });
              }}
            />
            <Icon
              name="trash-o"
              type="FontAwesome"
              style={{
                color: "rgb(180,180,180)",
                marginLeft: 33,
                marginBottom: -25,
              }}
            />
          </Left>
          <Dash
            style={{
              width: 1,
              height: 195,
              flexDirection: "column",
              marginLeft: 310,
              marginTop: -143,
            }}
            dashGap={-1}
            dashThickness={1}
            dashColor="rgb(180,180,180)"
          />
          <Right>
            <Text
              style={{
                marginLeft: 305,
                marginTop: -100,
                fontSize: 15,
                color: "black",
              }}
            >
              {item.currency}
            </Text>
            <Text
              style={{
                marginLeft: 290,
                marginTop: -55,
                fontSize: 30,
                color: "rgb(0,168,300)",
              }}
            >
              {item.price}
            </Text>
          </Right>
        </Card>
      </Content>
    );
  }
}
export default CartItem;
