import { createUseStyles } from "react-jss";

const drawerToggleStyles = createUseStyles({
  DrawerToggle: {
    width: "40px",
    height: "100%",
    display: "flex",
    flexFlow: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px 0",
    boxSizing: "border-box",
    cursor: "pointer",
    "& div": {
      width: "90%",
      height: "3px",
      backgroundColor: "white",
    },
  },

  "@media (min-width: 500px)": {
    DrawerToggle: {
      display: "none",
    },
  },
});

export default drawerToggleStyles;
