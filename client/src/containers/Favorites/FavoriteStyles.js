import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const favoriteStyles = createUseStyles({
  Container: {
    width: "100%",
    height: "100vh",
    paddingTop: "1%",
    background: `url(${Background})`,
  },
  Empty: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(255,	205, 30, 0.9)",
    color: "#21a4f3",
    margin: "10% auto 0 auto",
    width: "30%",
    padding: "5% 5%",
    border: "2px solid #21a4f3",
    "& p": {
      fontWeight: "bold",
      fontSize: "1.3rem",
    },
    "& a, &:visited": {
      color: "red",
    },
    "& a:hover": {
      color: "green",
    },
  },
  /* ----------- Laptops / Small Desktops ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "45%",
    },
  },
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "50%",
    },
  },
  /* Portrait Tablets && Landscape Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 1199px)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "55%",
    },
  },
});

export default favoriteStyles;
