import { createUseStyles } from "react-jss";
import Background from "../../assets/background.jpg";

const pokemonHomeStyles = createUseStyles({
  Container: {
    textAlign: "center",
    width: "100%",
    height: "100%",
    background: `url(${Background})`,
    paddingTop: "1%",
  },
  Info: {
    width: "65%",
    margin: "0 auto 2% auto",
    backgroundColor: "#ffcd1e",
    border: "2px solid #21a4f3",
    color: "black",
    "& h1": {
      color: "#2a75bb",
    },
    "& p": {
      color: "#8F5C2C",
    },
  },

  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media screen and (height: 360px) and (width: 740px) and (-webkit-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media screen and (width: 640px) and (height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (width: 360px) and (height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (width: 320px) and (height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media only screen and (height: 320px) and (width: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media only screen and (height: 375px) and (width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (width: 414px) and (height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media only screen and (height: 414px) and (width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "91%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (width: 375px) and (height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "95%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "0.9rem",
        wordSpacing: "3px",
        lineHeight: "25px",
      },
    },
  },
  /* Landscape */
  "@media only screen and (height: 375px) and (width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "98%",
    },
  },
});

export default pokemonHomeStyles;
