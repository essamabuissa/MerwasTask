import React from "react";
import activites from "./data";
import ActivityCard from "./ActivityCard";
import { List, Content } from "native-base";

const Food = () => {
  const activitiesList = activites.map((activity) => (
    <ActivityCard activity={activity} key={activity.name} />
  ));

  return (
    <Content>
      <List>{activitiesList}</List>
    </Content>
  );
};

export default Food;
