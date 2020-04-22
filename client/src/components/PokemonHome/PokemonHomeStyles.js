import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const pokemonHomeStyles = createUseStyles({
  Container: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    background: `url(${Background})`,
    paddingTop: "1%",
  },
  Info: {
    width: "65%",
    margin: "0 auto 2% auto",
    backgroundColor: "#ffcd1e",
    border: "2px solid #21a4f3",
    color: "black",
    "& h1": {
      color: "#2a75bb",
    },
    "& p": {
      color: "#8F5C2C",
    },
  },
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        lineHeight: "25px",
      },
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "1.1rem",
        lineHeight: "25px",
      },
    },
  },
   /* Landscape Tablets */
   "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Info: {
      width: "75%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "1.1rem",
        lineHeight: "25px",
      },
    },
  },
});

export default pokemonHomeStyles;
