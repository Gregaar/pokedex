import { createUseStyles } from "react-jss";

const toolbarStyles = createUseStyles({
  Toolbar: {
    opacity: "0.9",
    height: "75px",
    width: "100%",
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
    "& h1": {
      position: "absolute",
      top: "0",
      color: "#2a75bb",
    },
  },
  Logo: {
    margin: "auto",
    height: "80%",
  },
  /* Small Phones */
  "@media screen and (max-width: 300px)": {
    Toolbar: {
      "& h1": {
        marginLeft: "20px",
      },
    },
  },
  "@media (max-width: 499px)": {
    Toolbar: {
      "& nav": {
        display: "none",
      },
    },
  },
  "@media (min-width: 499px)": {
    Logo: {
      display: "none",
    },
    Toolbar: {
      "& h1": {
        display: "none",
      },
    },
  },
});

export default toolbarStyles;
