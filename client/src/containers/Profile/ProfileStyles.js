import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const profileStyles = createUseStyles({
  Container: {
    height: "100vh",
    background: `url(${Background})`,
  },
  Info: {
    width: "35%",
    height: "45%",
    paddingTop: "1%",
    position: "absolute",
    top: "0",
    bottom: "0",
    left: "0",
    right: "0",
    margin: "auto",
    backgroundColor: "#ffcd1e",
    border: "3px solid #21a4f3",
    "& h2": {
      color: "#2a75bb",
    },
    "& h3": {
      color: "#f33621",
      textShadow: "1px 1px 2px white",
      fontSize: "2rem",
    },
    "& h4": {
      color: "#4b21f3",
    },
    "& h5": {
      color: "#f33621",
      fontSize: "1rem",
    },
  },
  /* ----------- Laptops / Small Desktops ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px)": {
    Info: {
      height: "55%",
    },
  },
  /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Info: {
      marginTop: "5%",
      top: "auto",
      bottom: "auto",
      width: "90%",
      height: "50%",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Info: {
      width: "75%",
      height: "50%",
      margin: "90px auto 0 auto",
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Info: {
      width: "75%",
      height: "50%",
      margin: "90px auto 0 auto",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Info: {
      width: "65%",
      height: "50%",
      margin: "90px auto 0 auto",
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-min-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      height: "57%",
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-min-device-pixel-ratio: 4)": {
    Info: {
      width: "60%",
      height: "70%",
      margin: "90px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      height: "70%"
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      height: "80%",
      margin: "90px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-min-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      height: "65%",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (height: 360px) and (-webkit-min-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      height: "85%",
      padding: "1%",
      margin: "100px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "90%",
      height: "55%",
    },
  },
  /* Landscape */
  "@media only screen and (device-height: 411px) and (device-width: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "50%",
      height: "70%",
      margin: "100px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "90%",
      height: "75%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 568px) and (device-height: 320px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "90%",
      height: "75%",
      margin: "100px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "90%",
      height: "65%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 667px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "90%",
      height: "75%",
      margin: "100px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      height: "60%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 736px) and (device-height: 414px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "70%",
      height: "95%",
      margin: "90px auto 0 auto",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      height: "55%",
    },
  },
  /* Landscape */
  "@media only screen and (device-width: 812px) and (device-height: 375px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "50%",
      height: "75%",
      margin: "100px auto 0 auto",
      "& img": {
        display: "none",
      },
    },
  },
});

export default profileStyles;
