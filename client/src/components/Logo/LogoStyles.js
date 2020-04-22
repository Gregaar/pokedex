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
    width: "320%",
    "& img": {
      // margin: "10px 0 0 250px",
      float: "right",
      marginTop: "10px"
    },
  },
});

export default logoStyles;
