import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const profileStyles = createUseStyles({
  Container: {
    height: "100vh",
    background: `url(${Background})`,
  },
  Info: {
    width: "35%",
    height: "65%",
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
      height: "65%",
    },
  },
  /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    Info: {
      marginTop: "5%",
      top: "auto",
      bottom: "auto",
      width: "90%",
      height: "65%",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    Info: {
      width: "75%",
      height: "65%",
      margin: "90px auto 0 auto",
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Info: {
      width: "75%",
      height: "65%",
      margin: "90px auto 0 auto",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Info: {
      width: "65%",
      height: "65%",
      margin: "90px auto 0 auto",
    },
  },
});

export default profileStyles;
