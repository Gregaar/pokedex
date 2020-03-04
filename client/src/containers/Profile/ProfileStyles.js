import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const profileStyles = createUseStyles({
  Container: {
    height: "100vh",
    background: `url(${Background})`,
  },
  Info: {
    width: "35%",
    height: "40%",
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
    Container: {
      padding: "5%",
    },
    Info: {
      height: "50%",
    },
  },
  /* Small Phones */

  "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Container: {
      padding: "5%",
    },
    Info: {
      lineHeight: "1px",
      marginTop: "5%",
      top: "auto",
      bottom: "auto",
      width: "90%",
      height: "60%",
    },
  },
  "@media screen and (min-device-width: 300px) and (max-device-width: 499px) and (orientation: landscape)": {
    Info: {
      height: "100%",
    },
  },
  /* Bigger Phones */

  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Container: {
      padding: "5%",
    },
    Info: {
      lineHeight: "1px",
      width: "75%",
      height: "60%",
      margin: "90px auto 0 auto",
    },
  },
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px) and (orientation: landscape)": {
    Info: {
      height: "100%",
    },
  },
  /* Portrait Tablets */

  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Container: {
      padding: "5%",
    },
    Info: {
      lineHeight: "1px",
      width: "75%",
      height: "40%",
      margin: "90px auto 0 auto",
    },
  },
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)  and (orientation: landscape)": {
    Info: {
      height: "100%",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Container: {
      padding: "5%",
    },
    Info: {
      lineHeight: "1px",
      width: "65%",
      height: "60%",
      margin: "90px auto 0 auto",
    },
  },
});

export default profileStyles;
