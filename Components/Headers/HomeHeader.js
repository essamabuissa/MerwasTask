import React, { Component } from "react";
import { Icon, Item, Input, Header, Body, Button } from "native-base";
import { Dropdown } from "react-native-material-dropdown";
import Flag from "react-native-flags";
import { CART } from "../../Navigation/screenNames";

class HomeHeader extends Component {
  state = {
    query: "",
  };

  setQuery = (query) => this.setState({ query });

  render() {
    const { navigation } = this.props;
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
    ];

    return (
      <Header searchBar style={{ marginTop: -25 }}>
        <Icon
          name="menu"
          type="Entypo"
          style={{ marginTop: 15, color: "#FF7F50" }}
        />
        <Item
          style={{ borderRadius: 3, backgroundColor: "default", marginTop: 15 }}
        >
          <Icon
            name="search"
            type="FontAwesome"
            style={{ backgroundColor: "default", color: "rgb(0,168,300)" }}
          />
          <Input
            placeholder="Search"
            onChangeText={this.setQuery}
            value={this.state.query}
            style={{ backgroundColor: "default" }}
          />
          {this.state.query ? (
            <Icon
              name="ios-close-circle"
              type="Ionicons"
              onPress={() => this.setQuery("")}
            />
          ) : null}
        </Item>
        <Body>
          <Dropdown
            label="Country"
            data={data}
            style={{ marginLeft: 70, paddingTop: 100 }}
          />
        </Body>
        <Button
          style={{
            backgroundColor: "default",
            marginRight: -30,
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
      </Header>
    );
  }
}

export default HomeHeader;
