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
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-min-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-min-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-min-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-min-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
      margin: "100px auto",
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  /* landscape */
  "@media only screen and (device-height: 411px) and (device-width: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
    },
  },
  /* Landscape */
  "@media only screen and (device-height: 320px) and (device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  /* Landscape */
  "@media only screen and (device-height: 375px) and (device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
      margin: "100px auto",
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 736px) and (device-height: 414px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
      margin: "100px auto",
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
      margin: "100px auto",
      "& h2": {
        fontSize: "1.2rem",
      },
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
  },
});

export default aboutStyles;
