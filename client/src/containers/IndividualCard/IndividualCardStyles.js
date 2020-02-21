import { createUseStyles } from "react-jss";
import Background from "../../assets/background-images/jumbotron.JPG";

const individualCardStyles = createUseStyles({
  Container: {
    background: `url(${Background})`,
    backgroundSize: "contain",
    paddingTop: "2rem",
    paddingBottom: "10rem",
    height: "82vh",
    "& img": {
      float: "left",
      margin: "2rem 0 0 40rem",
    },
  },
  ButtonContainer: {
    display: "flex",
    justifyContent: "center",
    "& button": {
      marginLeft: "2rem",
    }
  },
  InfoContainer: {
    textTransform: "capitalize",
    textAlign: "left",
    width: "15%",
    margin: "1rem auto auto 70rem",
    paddingLeft: "25px",
    backgroundColor: "rgba(255, 205, 30, 0.9)",
    border: "3px solid #21a4f3",
    fontWeight: "bold",
    color: "#f33621",
    "& h2": {
      color: "#2a75bb",
    },
    "& p": {
      textShadow: "1px 1px 2px white",
    },
  },
  Description: {
    textAlign: "left",
    width: "50%",
    margin: "1rem auto auto 35rem",
    paddingLeft: "25px",
    backgroundColor: "rgba(255, 205, 30, 0.9)",
    border: "3px solid #21a4f3",
    "& h2": {
      color: "#2a75bb",
    },
    "& p": {
      textShadow: "1px 1px 2px white",
      fontWeight: "bold",
      wordSpacing: "5px",
      lineHeight: "20px",
      color: "#f33621",
    },
  },
});

export default individualCardStyles;
