import { createUseStyles } from "react-jss";

import Background from "../../assets/background.jpg";

const contactStyles = createUseStyles({
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
  ContactInfo: {
    width: "30%",
    border: "2px solid #21a4f3",
    margin: "5% auto 5% auto",
    backgroundColor: "#ffcd1e",
    color: "#8F5C2C;",
    padding: "1% 0",
    "& h2": {
      fontSize: "1.5rem",
      color: "#21a4f3",
    },
    "& a": {
      fontSize: "1.2rem",
    },
  },
  /* ----------- Laptops / Small Desktops ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1919px)": {
    Container: {
      height: "100vh",
    },
  },
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    ContactInfo: {
      width: "75%",
      paddingBottom: "20px",
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "70%",
      paddingBottom: "20px",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
    },
  },
});

export default contactStyles;
