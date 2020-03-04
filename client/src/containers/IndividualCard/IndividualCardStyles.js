import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const individualCardStyles = createUseStyles({
  Container: {
    background: `url(${Background})`,
    paddingTop: "2rem",
    paddingBottom: "10rem",
    height: "82%",
  },
  MobileImage: {
    "& img": {
      float: "left",
      margin: "2rem 0 0 40rem",
    },
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      display: "inline-block",
      padding: "0.7em 1.7em",
      margin: "2rem 0.3em 0.3em 0",
      borderRadius: "0.2em",
      boxSizing: "border-box",
      textDecoration: "none",
      fontFamily: "Roboto,sans-serif",
      fontWeight: "400",
      color: "white",
      backgroundColor: "#2a75bb",
      boxShadow:
        "inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)",
      textAlign: "center",
      position: "relative",
      "&:active": {
        boxShadow: "inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)",
      },
    },
  },
  GreenBtn: {
    color: "white !important",
    backgroundColor: "green !important",
  },

  YellowBtn: {
    color: "black !important",
    backgroundColor: "yellow !important",
  },

  InfoContainer: {
    textTransform: "capitalize",
    textAlign: "left",
    width: "15%",
    margin: "1rem auto auto 70rem",
    paddingLeft: "25px",
    backgroundColor: "rgba(255, 205, 30, 0.9)",
    border: "3px solid #21a4f3",
    fontWeight: "bold",
    color: "#f33621",
    "& h2": {
      color: "#2a75bb",
    },
    "& p": {
      textShadow: "1px 1px 2px white",
    },
  },
  Description: {
    textAlign: "left",
    width: "50%",
    margin: "1rem auto auto 35rem",
    paddingLeft: "25px",
    backgroundColor: "rgba(255, 205, 30, 0.9)",
    border: "3px solid #21a4f3",
    "& h2": {
      color: "#2a75bb",
    },
    "& p": {
      textShadow: "1px 1px 2px white",
      fontWeight: "bold",
      wordSpacing: "5px",
      lineHeight: "20px",
      color: "#f33621",
    },
  },
  /* Laptops / Small Desktops */
  "@media screen and (min-width: 1200px) and (max-width: 1919px)": {
    MobileImage: {
      display: "inline-block",
      marginRight: "20rem",
      "& img": {
        margin: "0 auto",
      },
    },
    ButtonContainer: {
      display: "inherit",
    },
    InfoContainer: {
      display: "inline-block",
      width: "20%",
      margin: "50px auto 0 -270px",
    },
    Description: {
      margin: "50px auto",
    },
  },
  /* Small Phones */ 
  "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    MobileImage: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      "& img": {
        display: "block",
        margin: "0 auto",
        width: "300px",
        height: "420px",
      },
    },
    ButtonContainer: {
      display: "inherit",
    },
    InfoContainer: {
      display: "inline-block",
      margin: "10px auto 0 auto",
      textAlign: "center",
      width: "15rem",
    },
    Description: {
      width: "90%",
      margin: "10px 2px 0 auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    MobileImage: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      "& img": {
        display: "block",
        margin: "0 auto",
        width: "300px",
        height: "420px",
      },
    },
    ButtonContainer: {
      display: "inherit",
    },
    InfoContainer: {
      display: "inline-block",
      margin: "10px auto 0 auto",
      textAlign: "center",
      width: "45%",
      padding: "0",
    },
    Description: {
      width: "90%",
      margin: "10px auto 0 auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Portrait Tablets && Landscape Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 1199px)": {
    MobileImage: {
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      "& img": {
        display: "block",
        margin: "0 auto",
        width: "300px",
        height: "420px",
      },
    },
    ButtonContainer: {
      display: "inherit",
    },
    InfoContainer: {
      display: "inline-block",
      margin: "10px auto 0 auto",
      textAlign: "center",
      width: "45%",
      padding: "0",
    },
    Description: {
      width: "90%",
      margin: "10px auto 0 auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
});

export default individualCardStyles;
