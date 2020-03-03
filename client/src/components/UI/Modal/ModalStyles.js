import { createUseStyles } from "react-jss";

const modalStyles = createUseStyles({
  Modal: {
    position: "fixed",
    zIndex: "500",
    backgroundColor: "#ffcd1e",
    width: "70%",
    border: "3px solid #21a4f3",
    paddingBottom: "1%",
    left: "15%",
    top: "35%",
    boxSizing: "border-box",
    transition: "all 0.3s ease-out",
    color: "#8F5C2C",
    fontSize: "1.2rem",
    "& button": {
      marginLeft: "5%",
    },
  },

  "@media (min-width: 600px)": {
    Modal: {
      width: "500px",
      left: "calc(50% - 250px)",
    },
  },
});

export default modalStyles;
