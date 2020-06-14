import React, { Component } from "react";
import {
  Text,
  Card,
  Content,
  Icon,
  CardItem,
  List,
  View,
  Button,
  Container,
} from "native-base";
import { ImageBackground } from "react-native";
import styles from "./styles";
import OptionCard from "./OptionCard";
import Unorderedlist from "react-native-unordered-list";
import voucher from "../../../assets/voucher.jpg";
import { Header } from "native-base";
import DetailHeader from "../../Headers/DetailHeader";

class ItemDetail extends Component {
  render() {
    const { activity } = this.props.route.params;
    const { navigation } = this.props;
    return (
      <Container>
        <Content>
          <Header style={{ marginTop: -100 }} />
          <DetailHeader navigation={navigation} />
          <Text style={{ marginTop: 20 }}>{activity.detaildescreption}</Text>

          <Card
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "rgb(100,100,100)",
            }}
          >
            <ImageBackground
              source={activity.image}
              style={{ width: 400, height: 200 }}
            ></ImageBackground>

            <Card style={styles.detailcard}>
              <CardItem style={styles.detailcard}>
                <Icon
                  name="clock"
                  type="Fontisto"
                  style={{ color: "#FF7F50" }}
                  size={11}
                />
                <Text style={{ color: "#FF7F50", fontSize: 11 }}>
                  FOR A LIMITED TIME ONLY
                </Text>
              </CardItem>
              <CardItem
                style={{
                  justifyContent: "center",
                  borderBottomWidth: 2,
                  borderStartWidth: 2,
                  borderTopWidth: 2,
                  borderLeftWidth: 2,
                  borderRightWidth: 2,
                  width: 100,
                  borderStartColor: "#A9A9A9",
                  borderRightColor: "#A9A9A9",
                  borderTopColor: "#A9A9A9",
                  borderBottomColor: "#A9A9A9",
                  height: 52,
                  marginLeft: 125,
                  marginBottom: 10,
                }}
              >
                <Icon
                  name="checkcircle"
                  type="AntDesign"
                  size={10}
                  style={{ color: "rgb(30,150,0)" }}
                />
                <Text style={{ color: "rgb(0,170,0)", fontSize: 11 }}>
                  {activity.bought.toString()} BOUGHT
                </Text>
              </CardItem>
              <Icon
                name="heart"
                type="AntDesign"
                size={10}
                style={{
                  color: "rgb(210,210,210)",
                  marginLeft: 300,
                  marginBottom: 2,
                }}
              />
              <CardItem>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ flex: 0 }}>
                    <Icon
                      name="list"
                      type="FontAwesome5"
                      style={{ color: "rgb(190,190,190)" }}
                    />
                  </View>
                  <View style={{ flex: 0 }}>
                    <Text
                      style={{
                        marginTop: 5,
                        marginLeft: 3,
                        color: "rgb(190,190,190)",
                      }}
                    >
                      CHOOSE YOUR OPTION
                    </Text>
                  </View>
                </View>
              </CardItem>
              <CardItem>
                <List>
                  <OptionCard />
                </List>
              </CardItem>
            </Card>
          </Card>
          <Card style={{ marginBottom: 10, borderBottomWidth: 2 }}>
            <CardItem>
              <Text style={{ fontSize: 20 }}>Highlights</Text>
            </CardItem>
            <CardItem>
              <ImageBackground
                source={voucher}
                style={{ width: 350, height: 70 }}
              ></ImageBackground>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text style={{ fontSize: 13, color: "rgb(140,140,140)" }}>
                  Experience 360 degree panoramic view and feel the thrill with
                  a flight experience on Flying Cup , only in Dubai from AED 49!
                  Child option available
                </Text>
              </Unorderedlist>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "rgb(80,80,80)",
                    fontSize: 13,
                  }}
                >
                  Click on the Buy Now button to choose your option:
                </Text>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "rgb(80,80,80)",
                    fontSize: 13,
                  }}
                >
                  Option 1:{" "}
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "normal",
                      color: "rgb(130, 130, 130)",
                    }}
                  >
                    Flight experience for 1 adult for AED 49
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "rgb(80,80,80)",
                      fontSize: 13,
                    }}
                  >
                    {" "}
                    {"\n"}
                    Option 2:{" "}
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "normal",
                        color: "rgb(130, 130, 130)",
                      }}
                    >
                      Flight experience for 1 child (4-12 years) for AED 35
                    </Text>
                  </Text>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "rgb(80,80,80)",
                      fontSize: 13,
                    }}
                  >
                    {" "}
                    {"\n"}
                    Option 3:{" "}
                    <Text
                      style={{
                        fontSize: 13,
                        fontWeight: "normal",
                        color: "rgb(130, 130, 130)",
                      }}
                    >
                      Flight experience + Binocular for 1 adult for AED 85
                    </Text>
                  </Text>
                </Text>
              </Unorderedlist>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "rgb(80,80,80)",
                    fontSize: 13,
                  }}
                >
                  Duration{" "}
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "normal",
                      color: "rgb(130, 130, 130)",
                    }}
                  >
                    20 Minutes
                  </Text>
                </Text>
              </Unorderedlist>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: -20 }}>
            <CardItem>
              <Text style={{ fontSize: 20 }}>Conditions</Text>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    color: "rgb(130, 130, 130)",
                  }}
                >
                  Valid for 90 days from the date of purchase.
                </Text>
              </Unorderedlist>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    color: "rgb(130, 130, 130)",
                  }}
                >
                  Booking not required (Subject to availability)
                </Text>
              </Unorderedlist>
            </CardItem>
            <CardItem>
              <Unorderedlist>
                <Text
                  style={{
                    fontSize: 13,
                    fontWeight: "normal",
                    color: "rgb(130, 130, 130)",
                  }}
                >
                  Not suitable for pregnant women , people with heart conditions
                  or vertigo
                </Text>
              </Unorderedlist>
            </CardItem>
          </Card>
          <Card style={{ marginTop: 15 }}>
            <CardItem>
              <Text style={{ fontSize: 20 }}>Directions</Text>
            </CardItem>
            <CardItem>
              <Text style={{ color: "rgb(0,168,300)", fontSize: 14 }}>
                The Company
              </Text>
            </CardItem>
            <CardItem style={{ marginBottom: 10 }}>
              <Text style={{ fontSize: 16 }}>Flying Cup</Text>
            </CardItem>
            <CardItem style={{ marginBottom: 10 }}>
              <Text style={{ color: "#FF7F50" }}>Flying Cup</Text>
              <Icon
                name="map-marker-alt"
                type="FontAwesome5"
                style={{ color: "rgb(0,168,300)", marginLeft: 5 }}
              />
            </CardItem>
            <CardItem>
              <Icon
                name="phone-in-talk"
                type="MaterialIcons"
                style={{ color: "rgb(0,168,300)" }}
              />
              <Text style={{ color: "rgb(0,168,300)", fontSize: 13 }}>
                800 382246255
              </Text>
            </CardItem>
            <CardItem>
              <Text style={{ color: "rgb(170,170,170)", fontSize: 13 }}>
                Ground & Level 2, The Dubai Mall
              </Text>
            </CardItem>
            <Button style={{ backgroundColor: "rgb(50,146,210)" }}>
              <View style={{ flexDirection: "row" }}>
                <Icon
                  name="add-shopping-cart"
                  type="MaterialIcons"
                  style={{ color: "white", marginLeft: 120 }}
                />
                <Text
                  style={{
                    marginRight: 180,
                    marginTop: 5,
                    color: "white",
                    fontWeight: "bold",
                  }}
                >
                  ADD TO CART
                </Text>
              </View>
            </Button>
            <Text
              style={{
                textDecorationLine: "underline",
                fontSize: 20,
                marginLeft: 80,
              }}
            >
              Log in for Quick Checkout
            </Text>
          </Card>
        </Content>
      </Container>
    );
  }
}
export default ItemDetail;
