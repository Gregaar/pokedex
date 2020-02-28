import React from "react";
import navStyles from "./NavigationItemsStyles";
import navItemStyles from "./NavigationItem/NavigationItemStyles";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const classes = navStyles();
  const navItemClasses = navItemStyles();

  const loggedIn = props.auth ? (
    <li className={navItemClasses.NavigationItem}>
      <a onClick={() => props.logout({})}>Logout</a>
    </li>
  ) : (
    <li className={navItemClasses.NavigationItem}>
      <a onClick={() => props.login({})}>Login</a>
    </li>
  );

  return (
    <ul className={classes.NavigationItems}>
      {props.auth ? (
      <React.Fragment>
      <NavigationItem exact link="/">
        Home
      </NavigationItem>
          <NavigationItem exact link="/cardlist">
            Card List
          </NavigationItem>
          <NavigationItem exact link="/favorites">
            Favorites
          </NavigationItem>
          <NavigationItem exact link="/profile">
            Profile
          </NavigationItem>
        </React.Fragment>
      ) : <NavigationItem exact link="/">
      Home
    </NavigationItem>}
      {loggedIn}
    </ul>
  );
};

export default React.memo(navigationItems);
