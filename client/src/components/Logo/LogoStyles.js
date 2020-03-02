import { createUseStyles } from "react-jss";

const logoStyles = createUseStyles({
  Logo: {
    backgroundColor: "#ffcd1e",
    padding: "8px",
    height: "80%",
    boxSizing: "border-box",
    borderRadius: "5px",
    "& img": {
      height: "100%",
    },
  },
  LogoRight: {
    "& img": {
      margin: "5px 0 0 200px",
    },
  },
});

export default logoStyles;
