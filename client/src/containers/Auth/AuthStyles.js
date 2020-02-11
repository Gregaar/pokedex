import { createUseStyles } from "react-jss";
import Background from "../../assets/background-images/jumbotron.JPG";

const authStyles = createUseStyles({
  Form: {
    background: `url(${Background})`,
    backgroundSize: "contain",
    height: "750px",
    padding: "1px",
  },
  Container: {
    textAlign: "center",
    border: "5px solid #21a4f3",
    width: "50%",
    height: "55%",
    margin: "100px auto",
    paddingTop: "100px",
    backgroundColor: "rgba(255,255,255, 0.7);",
  },
  Heading: {
    position: "relative",
    top: "-50px",
    color: "#2a75bb",
    textAlign: "center",
  },
  Button: {
    marginTop: "15px",
  },
  AxiosError: {
    margin: "-25px auto 25px auto",
    backgroundColor: "#ffcd1e",
    fontSize: "1.5rem",
    width: "50%",
  },
  HideError: {
    display: "none",
  },
});
export default authStyles;
