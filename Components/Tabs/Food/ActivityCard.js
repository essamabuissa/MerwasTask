import React from "react";
import { Card, CardItem, Text, Left, Body, Right, Button } from "native-base";
import { ImageBackground } from "react-native";
import styles from "./styles";

const ActivityCard = ({ activity }) => {
  return (
    <Card style={styles.maincard}>
      <CardItem>
        <ImageBackground
          source={activity.image}
          style={{ width: 400, height: 200 }}
        ></ImageBackground>
      </CardItem>
      <CardItem>
        <Text>{activity.name}</Text>
      </CardItem>
      <CardItem>
        <Text style={styles.descreption}>{activity.descreption}</Text>
      </CardItem>
      <CardItem>
        <Card style={styles.card}>
          <Text style={styles.location}>{activity.location}</Text>
        </Card>
      </CardItem>
      <CardItem style={styles.background}>
        <Left>
          <Text style={styles.currency}>{activity.currency}</Text>
          <Text style={styles.oldprice}>{activity.oldprice}</Text>

          <Text style={styles.price}>{activity.price}</Text>
        </Left>
        <Right>
          <Button style={styles.button}>
            <Text style={styles.buttontext}>VIEW DEAL</Text>
          </Button>
        </Right>
      </CardItem>
    </Card>
  );
};

export default ActivityCard;
