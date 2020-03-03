import { createUseStyles } from "react-jss";

const footerStyles = createUseStyles({
  Footer: {
    opacity: "0.9",
    height: "50px",
    width: "100%",
    backgroundColor: "#ffcd1e",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "0 20px",
    boxSizing: "border-box",
    zIndex: 90,
    border: "2px solid #21a4f3",
  },
});

export default footerStyles;
