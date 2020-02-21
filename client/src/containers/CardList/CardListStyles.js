import { createUseStyles } from "react-jss";
import Background from "../../assets/background-images/jumbotron.JPG";

const cardListStyles = createUseStyles({
  Container: {
    width: "100%",
    background: `url(${Background})`,
    display: "inline-grid",
    gridTemplateAreas: `". card . card . card ." `,
    gridTemplateColumns: "3fr 2fr 1fr 2fr 1fr 2fr 3fr",
    gridTemplateRows: "1fr 1fr",
    paddingTop: "50px",
  },
  CardGrid: {
    gridArea: "card",
  },
});

export default cardListStyles;
