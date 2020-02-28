import { createUseStyles } from "react-jss";

const landingStyles = createUseStyles({
  Landing: {
    display: "inline-grid",
    gridTemplateAreas: `". card . card . card ." `,
    gridTemplateColumns: "3fr 2fr 1fr 2fr 1fr 2fr 3fr",
    gridTemplateRows: "1fr 1fr",
  },
  CardGrid: {
    gridArea: "card",
    "& img": {
      cursor: "default",
    },
  },
});

export default landingStyles;
