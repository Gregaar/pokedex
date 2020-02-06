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
    "& h1": {
      fontFamily: "PokemonHollow",
      fontSize: "1.5rem",
      color: "blue",
      paddingRight: "15px",
    },
    "& h2": {
      fontFamily: "PokemonHollow",
      fontSize: "1.5rem",
      color: "blue",
    },
  },
  Pokemon: {
    display: "inline-block",
    width: "275px",
    margin: "0 1.5rem",
    fontSize: "2rem",
  },
  Generation: {
    display: "inline-block",
    width: "170px",
  },
  "@media (min-width: 500px)": {
    NavigationItems: {
      flexFlow: "row",
    },
  },
});

export default navStyles;
