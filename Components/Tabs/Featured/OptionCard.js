import React, { Component } from "react";
import { Card, Text, CardItem, Right, View } from "native-base";
import activities from "./data";
import Spinner from "react-native-number-spinner";
import styles from "./styles";
class OptionCard extends Component {
  state = {
    quantity: 1,
  };
  render() {
    const activ = activities.map((activity) => activity.options);
    return (
      <>
        <Card
          style={{
            borderLeftWidth: 3,
            width: 350,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderLeftColor: "rgb(220,220,220)",
            borderBottomColor: "white",
          }}
        >
          <CardItem>
            <Text>Option 1: Flight experience for 1 adult</Text>
          </CardItem>
          <CardItem>
            <Text
              style={{
                color: "rgb(110,110,110)",
                marginLeft: 18,
                marginTop: 35,
              }}
            >
              Quantity
            </Text>
            <Right>
              <Text style={{ color: "rgb(0,168,300)", fontSize: 20 }}>
                AED49
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Card
                    style={{
                      backgroundColor: "rgb(240,240,240)",
                      showBorder: false,
                    }}
                  >
                    <Text style={{ color: "#FF7F50" }}>25% OFF</Text>
                  </Card>
                </View>
                <View>
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      color: "rgb(200,200,200)",
                      marginLeft: 3,
                      marginTop: 5,
                    }}
                  >
                    AED65
                  </Text>
                </View>
              </View>
            </Right>
          </CardItem>
          <CardItem>
            <Spinner
              style={styles.spinner}
              max={10}
              min={2}
              step={1}
              color="rgb(220,220,220)"
              value={this.state.quantity}
              rounded={false}
              showBorder
              onChange={(num) => {
                this.setState({ quantity: num });
              }}
            />
          </CardItem>
        </Card>

        <Card
          style={{
            borderLeftWidth: 3,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <CardItem>
            <Text>Option 2: Flight experience for 1 child</Text>
          </CardItem>
          <CardItem>
            <Text
              style={{
                color: "rgb(110,110,110)",
                marginLeft: 18,
                marginTop: 35,
              }}
            >
              Quantity
            </Text>
            <Right>
              <Text style={{ color: "rgb(0,168,300)", fontSize: 20 }}>
                AED49
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Card
                    style={{
                      backgroundColor: "rgb(240,240,240)",
                      showBorder: false,
                    }}
                  >
                    <Text style={{ color: "#FF7F50" }}>22% OFF</Text>
                  </Card>
                </View>
                <View>
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      color: "rgb(200,200,200)",
                      marginLeft: 3,
                      marginTop: 5,
                    }}
                  >
                    AED45
                  </Text>
                </View>
              </View>
            </Right>
          </CardItem>
          <CardItem>
            <Spinner
              style={styles.spinner}
              max={10}
              min={2}
              step={1}
              color="rgb(220,220,220)"
              value={this.state.quantity}
              rounded={false}
              showBorder
              onChange={(num) => {
                this.setState({ quantity: num });
              }}
            />
          </CardItem>
        </Card>

        <Card
          style={{
            borderLeftWidth: 3,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
        >
          <CardItem>
            <Text>Option 3: Flight experience + Selfie stick for 1 adult</Text>
          </CardItem>
          <CardItem>
            <Text
              style={{
                color: "rgb(110,110,110)",
                marginLeft: 18,
                marginTop: 35,
              }}
            >
              Quantity
            </Text>
            <Right>
              <Text style={{ color: "rgb(0,168,300)", fontSize: 20 }}>
                AED49
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View>
                  <Card
                    style={{
                      backgroundColor: "rgb(240,240,240)",
                      showBorder: false,
                    }}
                  >
                    <Text style={{ color: "#FF7F50" }}>31% OFF</Text>
                  </Card>
                </View>
                <View>
                  <Text
                    style={{
                      textDecorationLine: "line-through",
                      color: "rgb(200,200,200)",
                      marginLeft: 3,
                      marginTop: 5,
                    }}
                  >
                    AED100
                  </Text>
                </View>
              </View>
            </Right>
          </CardItem>
          <CardItem>
            <Spinner
              style={styles.spinner}
              max={10}
              min={2}
              step={1}
              color="rgb(220,220,220)"
              value={this.state.quantity}
              rounded={false}
              showBorder
              onChange={(num) => {
                this.setState({ quantity: num });
              }}
            />
          </CardItem>
        </Card>
      </>
    );
  }
}
export default OptionCard;
