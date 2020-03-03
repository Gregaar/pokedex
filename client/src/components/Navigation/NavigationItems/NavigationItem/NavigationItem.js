import React from "react";
import { NavLink } from "react-router-dom";
import navItemStyles from "./NavigationItemStyles";

const navigationItem = (props) => {
  const classes = navItemStyles();
  const style = props.style ? props.style : classes.NavigationItem;

  return (
    <li className={style}>
      <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
