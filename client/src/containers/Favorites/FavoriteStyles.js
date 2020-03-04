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
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "50%",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "70%",
    },
  },
  /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "70%",
    },
  },
  /* Landscape */
  "@media only screen and (device-height: 411px) and (device-width: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 568px) and (device-height: 320px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 667px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "70%",
    },
  },
  /* Landscape */
  "@media only screen and (device-height: 414px) and (device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "50%",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "70%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
  },
});

export default favoriteStyles;
