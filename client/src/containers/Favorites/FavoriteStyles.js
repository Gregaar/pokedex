import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const favoriteStyles = createUseStyles({
  Container: {
    width: "100%",
    height: "100%",
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
  /* ----------- Non-Retina Screens ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    Container: {
      height: "100vh",
    },
  },
  /* ----------- Retina Screens ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)and (min-resolution: 192dpi)": {
    Container: {
      height: "100vh",
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media screen and (max-device-width: 640px) and (max-device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "50%",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "70%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (width: 320px) and (height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media only screen and (width: 568px) and (height: 320px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "60%",
    },
  },
  /* Landscape */
  "@media only screen and (width: 667px) and (height: 375px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "60%",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (width: 414px) and (height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "70%",
    },
  },
  /* Landscape */
  "@media only screen and (height: 414px) and (width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Empty: {
      width: "50%",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Empty: {
      width: "70%",
    },
  },
  /* Landscape */
  "@media only screen and (width: 812px) and (height: 375px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
  },
});

export default favoriteStyles;
