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
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (height: 360px) and (width: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (width: 320px) and (height: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    Info: {
      width: "90%",
      fontSize: "0.9rem",
    },
  },
  /* Landscape */
  "@media only screen and (height: 320px) and (width: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (width: 375px) and (height: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (height: 375px) and (width: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (width: 414px) and (height: 736px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (width: 736px) and (height: 414px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (width: 375px) and (height: 812px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (width: 812px) and (height: 375px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
  },
});

export default aboutStyles;
