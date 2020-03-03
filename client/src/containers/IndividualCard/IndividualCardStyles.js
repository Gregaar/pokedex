import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const individualCardStyles = createUseStyles({
  Container: {
    background: `url(${Background})`,
    paddingTop: "2rem",
    paddingBottom: "10rem",
    height: "82%",
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
  /* ----------- Non-Retina Screens ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    Container: {
      height: "100vh",
      "& img": {
        margin: "6% 0 0 250px",
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
  /* ----------- Retina Screens ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)and (min-resolution: 192dpi)": {
    Container: {
      height: "100vh",
      "& img": {
        margin: "6% 0 0 250px",
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
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      "& img": {
        margin: "5% 0 0 30px",
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
      width: "90%",
    },
    Description: {
      width: "90%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      "& img": {
        margin: "60px 45px",
        width: "300px",
        height: "420px",
      },
    },
    InfoContainer: {
      display: "inline-block",
      width: "30%",
      margin: "10px auto",
    },
    Description: {
      width: "90%",
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "5% 0 0 30px",
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
      width: "90%",
    },
    Description: {
      width: "90%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "30px 178px 0 178px",
        width: "280px",
        height: "320px",
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
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      "& img": {
        margin: "5% 0 0 30px",
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
      width: "90%",
    },
    Description: {
      width: "90%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      "& img": {
        margin: "0 0 0 180px",
        width: "280px",
        height: "320px",
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
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      "& img": {
        margin: "0 10px",
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
      width: "90%",
    },
    Description: {
      width: "88%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 568px) and (device-height: 320px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      "& img": {
        margin: "75px auto auto 0",
        width: "280px",
        height: "320px",
      },
    },
    ButtonContainer: {
      "& button": {
        width: "40%",
      },
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
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      "& img": {
        margin: "0 45px",
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
      width: "60%",
      paddingLeft: "0",
    },
    Description: {
      width: "88%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 667px) and (device-height: 375px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      "& img": {
        margin: "90px 5px",
        width: "280px",
        height: "320px",
      },
    },
    ButtonContainer: {
      display: "inherit",
    },
    InfoContainer: {
      width: "45%",
      margin: "10px auto 0 300px",
    },
    Description: {
      width: "90%",
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "0 55px",
        width: "300px",
        height: "420px",
      },
    },
    ButtonContainer: {
      display: "inline-grid",
      gridTemplateColumns: "1fr 1fr",
    },
    InfoContainer: {
      display: "inline-block",
      margin: "10px auto 0 auto",
      textAlign: "center",
      width: "60%",
      paddingLeft: "0",
    },
    Description: {
      width: "91%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 736px) and (device-height: 414px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "60px 45px",
        width: "300px",
        height: "420px",
      },
    },
    InfoContainer: {
      display: "inline-block",
      width: "30%",
      margin: "10px auto",
    },
    Description: {
      width: "90%",
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "0 45px",
        width: "300px",
        height: "420px",
      },
    },
    ButtonContainer: {
      display: "inline-grid",
      gridTemplateColumns: "1fr 1fr",
    },
    InfoContainer: {
      display: "inline-block",
      margin: "10px auto 0 auto",
      textAlign: "center",
      width: "60%",
      paddingLeft: "0",
    },
    Description: {
      width: "90%",
      margin: "10px auto auto 0",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      "& img": {
        margin: "60px 45px",
        width: "300px",
        height: "420px",
      },
    },
    InfoContainer: {
      display: "inline-block",
      width: "30%",
      margin: "10px auto",
    },
    Description: {
      width: "90%",
      margin: "10px auto",
      textAlign: "left",
      lineHeight: "25px",
      fontSize: "0.9rem",
      paddingRight: "5px",
    },
  },
});

export default individualCardStyles;
