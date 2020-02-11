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
  "@media (min-width: 500px)": {
    NavigationItems: {
      flexFlow: "row",
    },
  },
});

export default navStyles;
