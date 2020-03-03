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
  // make checklist of each device query, go through and make sure everything works one by one.
  /* ----------- Non-Retina Screens ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)": {
    CardGrid: {
      "& form": {
        width: "25%",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* ----------- Retina Screens ----------- */
  "@media screen and (min-width: 1200px) and (max-width: 1600px) and (-webkit-min-device-pixel-ratio: 2)and (min-resolution: 192dpi)": {
    CardGrid: {
      "& form": {
        width: "25%",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    CardGrid: {
      "& form": {
        width: "75%",
        padding: "2% 0",
      },
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-device-pixel-ratio: 4)": {
    CardGrid: {
      "& form": {
        width: "40%",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "75%",
        padding: "2% 0",
      },
    },
  },
  /* Landscape */
  "@media screen and (device-height: 360px) and (device-width: 640px) and (-webkit-max-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "50%",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Container: {
      gridTemplateAreas: `"card card"`,
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
    },
    CardGrid: {
      "& form": {
        width: "75%",
        padding: "2% 0",
      },
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    CardGrid: {
      "& form": {
        width: "45%",
        "& label": {
          display: "block",
        },
      },
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-max-device-pixel-ratio: 2)": {
    CardGrid: {
      "& form": {
        width: "80%",
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
  /* Landscape */

  "@media only screen and (device-width: 568px) and (device-height: 320px) and (-webkit-max-device-pixel-ratio: 2)": {
    CardGrid: {
      "& form": {
        width: "50%",
      },
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-max-device-pixel-ratio: 2)": {
    CardGrid: {
      "& form": {
        width: "80%",
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
  /* Landscape */
  "@media only screen and (device-height: 375px) and (device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    CardGrid: {
      "& form": {
        width: "45%",
      },
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-max-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "65%",
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
  /* Landscape */
  "@media only screen and (device-width: 736px) and (device-height: 414px) and (-webkit-max-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "40%",
      },
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-max-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "70%",
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
  /* Landscape */
  "@media only screen and (device-height: 375px) and (device-width: 812px) and (-webkit-max-device-pixel-ratio: 3)": {
    CardGrid: {
      "& form": {
        width: "35%",
      },
    },
  },
});

export default cardListStyles;
