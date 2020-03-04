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
    "& a": {
      cursor: "pointer",
    },
  },
  "@media (min-width: 500px)": {
    NavigationItems: {
      flexFlow: "row",
    },
  },
});

export default navStyles;
