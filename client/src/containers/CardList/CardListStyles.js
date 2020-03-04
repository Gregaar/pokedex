import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const cardListStyles = createUseStyles({
  Container: {
    width: "100%",
    height: "100%",
    background: `url(${Background})`,
    display: "inline-grid",
    gridTemplateAreas: `". card . card . card ." `,
    gridTemplateColumns: "3fr 2fr 1fr 2fr 1fr 2fr 3fr",
    gridTemplateRows: "1fr 1fr",
    paddingTop: "50px",  
  },
  CardGrid: {
    gridArea: "card",
    paddingLeft: "2%",
    "& form": {
      width: "15%",
      background: "#ffcd1e",
      border: "1px solid #21a4f3",
      padding: "1% 0",
      margin: "0 auto 1% auto",
      textAlign: "center",
      "& label": {
        color: "#2a75bb",
        fontWeight: "bold",
      },
      "& input": {
        textAlign: "center",
        fontWeight: "bold",
      },
      "& button": {
        marginLeft: "5%",
      },
    },
  },
  Pokedex: {
    background: `url("https://bit.ly/3a1WDkw")`,
    backgroundSize: "contain",
    padding: "10%",
    border: "0",
    marginTop: "2%",
    cursor: "pointer",
  },
  /* ----------- Laptops / Small Desktops ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1919px)": {
    CardGrid: {
      "& form": {
        width: "18rem",
        "& label": {
          display: "block",
        },
      },
    },
  },
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    CardGrid: {
      "& form": {
        width: "17rem",
        padding: "2% 0",
        "& label": {
          display: "block",
        },
        "& input, & button": {
          display: "inline-block",
        },
      },
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    CardGrid: {
      "& form": {
        width: "16rem",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* Portrait Tablets && Landscape Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 1199px)": {
    CardGrid: {
      "& form": {
        width: "16rem",
        "& label": {
          display: "block",
        },
      },
    },
  },
});

export default cardListStyles;
