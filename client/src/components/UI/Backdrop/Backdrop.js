import React from "react";
import backdropStyles from "./BackdropStyles";

const backdrop = (props) => {
  const classes = backdropStyles();
  return props.show ? <div className={classes.Backdrop} onClick={props.closed}></div> : null;
};

export default backdrop;
