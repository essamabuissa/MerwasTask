import aqua from "../../../assets/images/NewIn/aqua.jpg";
import bidfood from "../../../assets/images/NewIn/bidfood.jpg";
import hotel from "../../../assets/images/NewIn/hotel.jpg";

const activities = [
  {
    name: "Staycation Packages at Oryx Hotel",
    descreption: "1-Night stay with meals and room choices",
    location: "  Al Khaldiya  ",
    discount: "29% OFF",
    currency: "AED",
    oldprice: 385,
    price: 275,
    image: hotel,
  },

  {
    name: "General Admission at Dreamland Aqua Park",
    descreption: "Valid daily for adults and children",
    location: "  Umm Al Quwain  ",
    discount: "37% OFF",
    currency: "AED",
    oldprice: 168,
    price: 105,
    image: aqua,
  },

  {
    name: "10% Off on Online Orders From Bidfood",
    descreption: "Free delivary available!",
    location: "  Multiple Locations  ",
    discount: "21% OFF",
    currency: "AED",
    oldprice: null,
    price: 9,
    image: bidfood,
  },
];

export default activities;
