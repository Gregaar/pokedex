import React from "react";

import buttonStyles from "./ButtonStyles";

const button = (props) => {
  const classes = buttonStyles();

  const style = props.style ? props.style : classes.Button;

  return (
      <button onClick={props.clicked} className={style}>
        {props.children}
      </button>
  );
};

export default button;
