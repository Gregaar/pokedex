import { createUseStyles } from "react-jss";

import Background from "../../assets/background.jpg";

const contactStyles = createUseStyles({
  Container: {
    width: "100%",
    height: "78vh",
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
  /* ----------- Non-Retina Screens ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    Container: {
      height: "100vh",
    },
  },
  /* ----------- Retina Screens ----------- */
  "@media screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)and (min-resolution: 192dpi)": {
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
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (height: 360px) and (width: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      paddingTop: "0",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
      margin: "0 auto",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Container: {
      paddingTop: "0",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
      margin: "0 auto",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      paddingTop: "0",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
      margin: "0 auto",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (width: 320px) and (height: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* Landscape */
  "@media only screen and (width: 568px) and (height: 320px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* Landscape */
  "@media only screen and (width: 667px) and (height: 375px) and (-webkit-max-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (width: 414px) and (height: 736px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* Landscape */
  "@media only screen and (width: 736px) and (height: 414px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 812px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "200px auto",
    },
  },
  /* Landscape */
  "@media only screen and (width: 812px) and (height: 375px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "50%",
    },
  },
});

export default contactStyles;
