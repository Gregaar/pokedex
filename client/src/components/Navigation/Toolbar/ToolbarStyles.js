import { createUseStyles } from "react-jss";

const toolbarStyles = createUseStyles({
  Toolbar: {
    opacity: "0.9",
    height: "75px",
    width: "100%",
    // position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "#ffcd1e",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    boxSizing: "border-box",
    zIndex: 90,
    border: "2px solid #21a4f3",
    "& nav": {
      height: "100%",
      listStyle: "none",
    },
  },
});

export default toolbarStyles;
