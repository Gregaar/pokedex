import React from "react";

import navStyles from "./NavigationItemsStyles";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const classes = navStyles();
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem exact link="/cardlist">
        Card List
      </NavigationItem>
      <NavigationItem exact link="/rules">
        Rules
      </NavigationItem>
      <li>
        <h1 className={classes.Pokemon}>Pokemon Dream Team</h1>
      </li>
      <li>
        <h2 className={classes.Generation}>Generation I</h2>
      </li>
      <NavigationItem exact link="/support">
        Support
      </NavigationItem>
      <NavigationItem exact link="/login">
        Login
      </NavigationItem>
      <NavigationItem exact link="/sign-up">
        Sign up
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
