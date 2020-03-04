import { createUseStyles } from "react-jss";

const imageStyles = createUseStyles({
  "@keyframes grow": {
    from: { transform: "scale3d(1, 1, 1)" },
    to: { transform: "scale3d(1.2, 1.2, 1.2)" },
  },
  CardList: {
    height: "420px",
    width: "300px",
    cursor: "pointer",
    marginRight: "0.5%",
    "&:hover": {
      animationName: "$grow",
      animationDuration: "3s",
      animationTimingFunction: "ease-in-out",
      animationDirection: "alternate",
      animationIterationCount: "infinite",
    },
  },
  Individual: {
    height: "500px",
    width: "380px",
  },
  /* Small Phones */ 
  "@media screen and (min-device-width: 300px) and (max-device-width: 499px)": {
    CardList: {
      height: "200px",
      width: "145px",
    },
  },
  /* Bigger Phones */ 
  "@media only screen and (min-device-width: 480px) and (max-device-width: 767px)": {
    CardList: {
      height: "250px",
      width: "200px",
    },
  },
  /* Portrait Tablets */ 
  "@media only screen and (min-device-width: 768px) and (max-device-width: 991px)": {
    CardList: {
      height: "300px",
      width: "250px",
    },
  },
  /* Landscape Tablets */
  "@media only screen and (min-device-width: 992px) and (max-device-width: 1199px)": {
    CardList: {
      height: "370px",
      width: "300px",
    },
  },
  /* ----------- Galaxy S9/S9+ ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 740px) and (-webkit-device-pixel-ratio: 4)": {
    CardList: {
      height: "220px",
      width: "170px",
    },
  },
  /* ----------- Google Pixel ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 3)": {
    CardList: {
      height: "200px",
      width: "150px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 3)": {
    CardList: {
      height: "250px",
      width: "200px",
    },
  },
  /* ----------- Google Pixel XL ----------- */
  /* Portrait */
  "@media screen and (device-width: 360px) and (device-height: 640px) and (-webkit-device-pixel-ratio: 4)": {
    CardList: {
      height: "200px",
      width: "150px",
    },
  },
  /* Landscape */
  "@media screen and (device-width: 640px) and (device-height: 360px) and (-webkit-device-pixel-ratio: 4)": {
    CardList: {
      height: "200px",
      width: "150px",
    },
  },
  /* ----------- Google Pixel 3XL ----------- */
  /* Portrait */
  "@media only screen and (device-width: 411px) and (device-height: 823px) and (-webkit-min-device-pixel-ratio: 2)": {
    CardList: {
      height: "250px",
      width: "180px",
    },
  },
  /* ----------- iPhone 5, 5S, 5C and 5SE ----------- */
  /* Portrait */
  "@media only screen and (device-width: 320px) and (device-height: 568px) and (-webkit-min-device-pixel-ratio: 2)": {
    CardList: {
      height: "200px",
      width: "150px",
    },
  },
  /* ----------- iPhone 6, 6S, 7 and 8 ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 667px) and (-webkit-min-device-pixel-ratio: 2)": {
    CardList: {
      height: "250px",
      width: "180px",
    },
  },
  /* ----------- iPhone 6+, 7+ and 8+ ----------- */
  /* Portrait */
  "@media only screen and (device-width: 414px) and (device-height: 736px) and (-webkit-min-device-pixel-ratio: 3)": {
    CardList: {
      height: "250px",
      width: "180px",
    },
  },
  /* ----------- iPhone X ----------- */
  /* Portrait */
  "@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-min-device-pixel-ratio: 3)": {
    CardList: {
      height: "250px",
      width: "180px",
    },
  },
});

export default imageStyles;
