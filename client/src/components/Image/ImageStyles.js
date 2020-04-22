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
});

export default imageStyles;
