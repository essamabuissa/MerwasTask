import flight from "../../../assets/images/Featured/flight.jpg";
import burj from "../../../assets/images/Featured/burj.jpg";
import aquarium from "../../../assets/images/Featured/aquarium.jpg";

const activities = [
  {
    name: "Flight Experience on Flying Cup",
    maindescreption: "Options with Sefie stick on binocular",
    detaildescreption:
      "Experience 360 degree panoramic view & feel the thrill with a flight experience on Flying Cup, only in Dubai from AED 49! Child option available",
    location: "  Marina/JBR  ",
    discount: "25% OFF",
    currency: "AED",
    oldprice: 65,
    price: 49,
    companyname: "Flying Cup",
    image: flight,
    options: {
      option1: {
        name: "Flight experience for 1 adult",
        price: 49,
        oldprice: 65,
        discount: "25% OFF",
      },
      option2: {
        name: "Flight experience for 1 child",
        price: 35,
        oldprice: 45,
        discount: "22% OFF",
      },
      option3: {
        name: "Flight experience + Selfie stick for 1 adult",
        price: 69,
        oldprice: 100,
        discount: "31% OFF",
      },
    },

    bought: 7240,
  },

  {
    name: "Get At The Top Burj Khalifa Fast Track Ticket",
    maindescreption: "Entry to Level 125+ F&B voucher",
    detaildescreption:
      "Get At The Top Fast Track Entry to Level 125,124 with a food & bevarage treat - all for only AED 99 per person",
    location: "  Burj Khalifa  ",
    discount: "72% OFF",
    companyname: "Burj Khalifa",
    currency: "AED",
    oldprice: 355,
    price: 99,
    image: burj,
    bought: 59,
  },

  {
    name: "Dubai Aquarium & Underwater Zoo Experience",
    maindescreption: "Dubai Aquarium & Underwater Zoo Experience",
    detaildescreption:
      "See the exotic wonders of aquatic life first-hand with the Dubai Aquarim & Underwater Zoo Experience fir AED 59 per person",
    location: "  The Dubai Mall  ",
    discount: "21% OFF",
    companyname: "Emaar Entertainment",

    currency: "AED",
    oldprice: 75,
    price: 59,
    image: aquarium,
    bought: 6,
  },
];

export default activities;
