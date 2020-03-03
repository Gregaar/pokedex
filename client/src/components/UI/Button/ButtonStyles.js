import { createUseStyles } from "react-jss";

const buttonStyles = createUseStyles({
  Button: {
    display: "inline-block",
    padding: "0.7em 1.7em",
    margin: "2rem 0.3em 0.3em 0",
    borderRadius: "0.2em",
    boxSizing: "border-box",
    textDecoration: "none",
    fontFamily: "Roboto,sans-serif",
    fontWeight: "400",
    color: "#FFFFFF",
    backgroundColor: "#2a75bb",
    boxShadow:
      "inset 0 -0.6em 1em -0.35em rgba(0,0,0,0.17),inset 0 0.6em 2em -0.3em rgba(255,255,255,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)",
    textAlign: "center",
    position: "relative",
    "&:active": {
      boxShadow: "inset 0 0.6em 2em -0.3em rgba(0,0,0,0.15),inset 0 0 0em 0.05em rgba(255,255,255,0.12)",
    },
    "&:disabled": {
      color: "#FFFFFF",
      backgroundColor: "grey",
      cursor: "not-allowed",
      boxShadow: "none",
    },
    "media all and (max-width:30em)": {
      button: {
        display: "block",
        margin: "0.4em auto",
      },
    },
    Invalid: {
      Button: {
        color: "black",
      },
    },
  },
});

export default buttonStyles;
