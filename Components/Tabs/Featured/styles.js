import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  descreption: {
    color: "#A9A9A9",
    fontSize: 14,
  },
  location: {
    color: "#FF7F50",
    fontSize: 15,
  },
  card: {
    borderRadius: 3,
  },
  background: {
    backgroundColor: "rgb(0,168,300)",
  },
  currency: {
    color: "white",
  },
  oldprice: {
    fontSize: 17,
    textDecorationLine: "line-through",
    color: "white",
  },
  price: {
    fontSize: 40,
    color: "white",
  },

  button: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 95,
    height: 30,
  },
  buttontext: {
    fontSize: 13,
    color: "black",
  },
  maincard: {
    borderBottomWidth: 2,
    borderRadius: 8,
    borderBottomColor: "rgb(0,150,300)",
  },
  detailcard: {
    backgroundColor: "rgb(240,240,240)",
    justifyContent: "center",
    marginTop: -7,
  },
  spinner: {
    flex: 0,
    width: 130,
    height: 50,
    marginBottom: 90,
    position: "relative",
  },
  cartbutton: {
    color: "red",
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
  },
});

export default styles;
