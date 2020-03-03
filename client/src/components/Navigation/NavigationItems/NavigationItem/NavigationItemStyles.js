import { createUseStyles } from "react-jss";

const navItemStyles = createUseStyles({
  NavigationItem: {
    boxSizing: "border-box",
    display: "block",
    margin: "0 1rem",
    "& a": {
      color: "#8F5C2C",
      textDecoration: "none",
      boxSizing: "border-box",
      display: "block",
      "&:hover, &:active, &.active ": {
        color: "#40A4C8",
      },
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (width: 320px) and (height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Landscape */
  "@media only screen and (width: 375px) and (height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (width: 414px) and (height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
});

export default navItemStyles;
