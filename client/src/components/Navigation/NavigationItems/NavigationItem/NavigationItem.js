import React from "react";
import { NavLink } from "react-router-dom";
import navItemStyles from "./NavigationItemStyles";

const navigationItem = (props) => {
  const classes = navItemStyles();

  return (
    <li className={classes.NavigationItem}>
      <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>
        {props.children}
      </NavLink>
    </li>
  );
};

export default navigationItem;
