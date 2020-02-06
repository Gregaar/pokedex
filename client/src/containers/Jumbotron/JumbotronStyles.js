import { createUseStyles } from "react-jss";
import Background from "../../assets/background-images/jumbotron.JPG";

const jumbotronStyles = createUseStyles({
  Jumbotron: {
    width: "100%",
    background: `url(${Background})`,
    backgroundSize: "contain",
    display: "inline-grid",
    // marginTop: '50px',
    gridTemplateAreas: `". card card card ."
                        ". card card card ."   
    `,
    gridTemplateColumns: "3fr 2fr 2fr 2fr 3fr",
    gridTemplateRows: "1fr 1fr",
    "& img": {
      opacity: "0.9",
    },
  },
  CardGrid: {
    gridArea: "card",
  },
});

export default jumbotronStyles;
