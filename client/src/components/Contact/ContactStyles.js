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
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      height: "100vh",
    },
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-device-pixel-ratio: 4)": {
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
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
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
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      paddingTop: "0",
    },
    ContactInfo: {
      width: "50%",
      paddingBottom: "20px",
      margin: "0 auto",
    },
  },
   /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-height: 411px) and (device-width: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "50%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-width: 568px) and (device-height: 320px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
    ContactInfo: {
      width: "90%",
      paddingBottom: "20px",
      margin: "100px auto",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 667px) and (device-height: 375px) and (-webkit-max-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-width: 736px) and (device-height: 414px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-max-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-max-device-pixel-ratio: 3)": {
    Container: {
      height: "100%",
    },
    ContactInfo: {
      width: "50%",
    },
  },
});

export default contactStyles;
