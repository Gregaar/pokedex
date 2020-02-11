import React from "react";

import buttonStyles from "./ButtonStyles";

const button = (props) => {
  const classes = buttonStyles();

  return (
    <div>
      <button disabled={props.invalid} className={classes.Button}>
        {props.children}
      </button>
    </div>
  );
};

export default button;
