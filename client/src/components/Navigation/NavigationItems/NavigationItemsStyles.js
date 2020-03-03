import { createUseStyles } from "react-jss";

const navStyles = createUseStyles({
  NavigationItems: {
    margin: "0 auto",
    padding: 0,
    listStyle: "none",
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    height: "100%",
    "& a": {
      cursor: "pointer",
    },
  },
  "@media (max-width: 500px)": {
    NavigationItems: {
      flexFlow: "column",
    },
  },
});

export default navStyles;
