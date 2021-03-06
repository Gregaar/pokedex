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
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    NavigationItem: {
      fontSize: "1rem",
      fontWeight: "bold",
      lineHeight: "50px",
    },
  },
});

export default navItemStyles;
