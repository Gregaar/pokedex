import { createUseStyles } from "react-jss";

import Background from "../../assets/background.jpg";

const aboutStyles = createUseStyles({
  Container: {
    width: "100%",
    height: "100vh",
    paddingTop: "1%",
    paddingBottom: "2.5%",
    background: `url(${Background})`,
    "& a, a:visited": {
      color: "red",
      textDecoration: "none",
    },
    "& a:hover": {
      color: "green",
      textDecoration: "underline",
    },
  },
  Info: {
    width: "50%",
    border: "2px solid #21a4f3",
    margin: "5% auto",
    backgroundColor: "#ffcd1e",
    color: "#8F5C2C;",
    "& h2": {
      color: "#21a4f3",
    },
  },
  /* ----------- Laptops / Small Desktops ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    Container: {
      height: "100vh",
    },
  },
  /* Small Phones */ 
  "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "75%",
    },
  },
});

export default aboutStyles;
