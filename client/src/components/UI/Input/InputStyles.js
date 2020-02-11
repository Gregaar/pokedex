import { createUseStyles } from "react-jss";

const inputStyles = createUseStyles({
  InputContainer: {
    display: "inline-grid",
    marginLeft: "10px",
    fontSize: "1.5rem",
    fontWeight: "bolder",
    color: "#2a75bb",
    borderRadius: "5px",
  },
  InputField: {
    border: "1px solid black",
    borderRadius: "2px",
    height: "25px",
    fontSize: "1rem",
    textAlign: "center",
    "&:focus": {
      outline: "none",
      backgroundColor: "#ccc",
    },
  },
  InvalidInput: {
    border: "1px solid red",
    backgroundColor: "salmon",
    borderRadius: "2px",
    height: "25px",
    fontSize: "1rem",
    textAlign: "center",
  },
  Label: {
    display: "block",
    fontWeight: "bold",
    marginBottom: "8px",
  },
});

export default inputStyles;
