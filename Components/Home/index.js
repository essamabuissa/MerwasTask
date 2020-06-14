import React, { Component } from "react";

import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Text,
  TabHeading,
} from "native-base";

import Featured from "../Tabs/Featured/index";
import HomeHeader from "../Headers/HomeHeader";
import NewIn from "../Tabs/NewIn/index";
import Food from "../Tabs/Food/index";

const Home = ({ navigation }) => {
  return (
    <Container>
      <Header hasTabs style={{ marginTop: -90 }} />
      <HomeHeader navigation={navigation} />

      <Tabs
        style={{ marginBottom: 0 }}
        renderTabBar={() => <ScrollableTab />}
        tabBarUnderlineStyle={{
          borderBottomWidth: 4,
          borderBottomColor: "rgb(0,168,300)",
        }}
      >
        <Tab
          heading={
            <TabHeading>
              <Text style={{ color: "rgb(0,168,300)", fontStyle: "normal" }}>
                FEATURED
              </Text>
            </TabHeading>
          }
        >
          <Featured navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text style={{ color: "rgb(0,168,300)" }}>NEW IN</Text>
            </TabHeading>
          }
        >
          <NewIn />
        </Tab>
        <Tab
          heading={
            <TabHeading>
              <Text style={{ color: "rgb(0,168,300)" }}>FOOD</Text>
            </TabHeading>
          }
        >
          <Food />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Home;
