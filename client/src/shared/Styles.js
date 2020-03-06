import { createUseStyles } from "react-jss";

const sharedStyles = createUseStyles({
  StickyUp: {
    position: "fixed",
    bottom: "20px",
    right: "30px",
    zIndex: "99",
    fontSize: "18px",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(255, 205, 30, 0.8)",
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "rgba(255, 205, 30, 1)",
      border: "1px solid #21a4f3",
      color: "black",
    },
  },
  StickyDown: {
    position: "fixed",
    bottom: "20px",
    left: "30px",
    zIndex: "99",
    fontSize: "18px",
    border: "none",
    outline: "none",
    backgroundColor: "rgba(255, 205, 30, 0.8)",
    color: "white",
    cursor: "pointer",
    padding: "15px",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor: "rgba(255, 205, 30, 1)",
      border: "1px solid #21a4f3",
      color: "black",
    },
  },
});

export default sharedStyles;
