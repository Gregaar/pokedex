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
   /* Small Phones */ 
   "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
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
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
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
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    Info: {
      width: "90%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "1.1rem",
        lineHeight: "25px",
      },
    },
  },
   /* Landscape Tablets */
   "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    Info: {
      width: "75%",
      padding: "0 1%",
      "& h1": {
        fontSize: "1.5rem",
      },
      "& p": {
        fontSize: "1.1rem",
        lineHeight: "25px",
      },
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
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
  "@media screen and (device-height: 360px) and (device-width: 740px) and (-webkit-device-pixel-ratio: 4)": {
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
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
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
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
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
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
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
  /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-height: 411px) and (device-width: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    Info: {
      width: "98%",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-height: 320px) and (device-width: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-height: 375px) and (device-width: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
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
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-height: 414px) and (device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
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
  "@media only screen and (device-height: 375px) and (device-width: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    Info: {
      width: "98%",
    },
  },
});

export default pokemonHomeStyles;
