import React from "react";
import activites from "./data";
import ActivityCard from "./ActivityCard";
import { List, Content, Spinner } from "native-base";

const Featured = ({ navigation }) => {
  const activitiesList = activites.map((activity) => (
    <ActivityCard
      activity={activity}
      navigation={navigation}
      key={activity.name}
    />
  ));
  if (!activitiesList.length) return <Spinner color="#00838f" />;

  return (
    <Content>
      <List>{activitiesList}</List>
    </Content>
  );
};

export default Featured;
