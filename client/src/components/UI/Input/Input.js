import React from "react";
import ReactTooltip from "react-tooltip";
import inputStyles from "./InputStyles";

const input = (props) => {
  const classes = inputStyles();

  const style = props.invalid && props.shouldValidate && props.touched ? classes.InvalidInput : classes.InputField;

  const tooltip = props.invalid && props.shouldValidate && props.touched ? props.dataTip : "";

  let inputElement = null;

  inputElement = (
    <input
      className={style}
      id={props.id}
      type={props.type}
      onChange={props.change}
      {...props.elementConfig}
      value={props.value}
      required={props.required}
      data-tip={tooltip}
    />
  );

  return (
    <div className={classes.InputContainer}>
      <label className={classes.Label} htmlFor={props.htmlFor}>
        {props.label}
      </label>
      {inputElement}
      <ReactTooltip />
    </div>
  );
};

export default input;
