import { createUseStyles } from "react-jss";

const navItemStyles = createUseStyles({
  NavigationItem: {
    boxSizing: "border-box",
    display: "block",
    marginLeft: '2.75rem',
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
});

export default navItemStyles;
