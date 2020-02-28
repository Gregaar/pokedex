import { createUseStyles } from "react-jss";

const sideDrawerStyles = createUseStyles({
  SideDrawer: {
    position: "fixed",
    width: "150px",
    maxWidth: "70%",
    height: "100%",
    left: "0",
    top: "0",
    zIndex: "200",
    backgroundColor: "#ffcd1e",
    padding: "32px 16px",
    boxSizing: "border-box",
    transition: "transform 0.3s ease-out",
  },

  "@media (min-width: 500px)": {
    SideDrawer: {
      display: "none",
    },
  },

  Open: {
    transform: "translateX(0)",
  },

  Closed: {
    transform: "translateX(-100%)",
  },

  Logo: {
    height: "11%",
    marginBottom: "32px",
  },
});

export default sideDrawerStyles;
