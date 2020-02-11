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
      <NavigationItem style={classes.Pokemon} exact link="/">
        Pokemon Dream Team: Generation I
      </NavigationItem>
      <NavigationItem exact link="/support">
        Support
      </NavigationItem>
      <NavigationItem exact link="/login">
        Login
      </NavigationItem>
      <NavigationItem exact link="/signup">
        Sign up
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
