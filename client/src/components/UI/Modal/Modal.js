import React from "react";
import modalStyles from "./ModalStyles";
import Backdrop from "../Backdrop/Backdrop";
import Button from "../Button/Button";

const modal = (props) => {
  const classes = modalStyles();
  return (
    <React.Fragment>
      <Backdrop show={props.show} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
        <Button clicked={props.clicked}>Ok</Button>
      </div>
    </React.Fragment>
  );
};

export default modal;
