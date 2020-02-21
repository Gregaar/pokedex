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
});

export default imageStyles;
