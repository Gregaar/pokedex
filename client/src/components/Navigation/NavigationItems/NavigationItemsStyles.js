import { createUseStyles } from "react-jss";

const navStyles = createUseStyles({
  NavigationItems: {
    margin: "0 auto",
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    height: "100%",
  },
  Pokemon: {
    display: "inline-block",
    width: "430px",
    margin: "0 1rem",
    fontFamily: "PokemonHollow",
    fontSize: "1.4rem",
    fontWeight: "bolder",
    "& a": {
      color: "#2a75bb",
      textDecoration: "none",
      boxSizing: "border-box",
      display: "block",
      "&:hover, &:active, &.active ": {
        color: "#2a75bb",
      },
    },
  },
  Auth: {
    display: "inline-block",
    padding: "0.7em 1.7em",
    margin: "2rem 0.3em 0.3em 0",
    borderRadius: "0.2em",
    boxSizing: "border-box",
    textDecoration: "none",
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
  },
  "@media (min-width: 500px)": {
    NavigationItems: {
      flexFlow: "row",
    },
    Auth: {
      display: "block",
      margin: "0.4em auto",
    },
  },
});

export default navStyles;
