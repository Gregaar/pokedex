import React from "react";
import navStyles from "./NavigationItemsStyles";
import Button from "../../UI/Button/Button";
import NavigationItem from "./NavigationItem/NavigationItem";

const navigationItems = (props) => {
  const classes = navStyles();

  const loggedIn = props.auth ? (
    <React.Fragment>
      <NavigationItem exact link="/profile">
        Profile
      </NavigationItem>
      <Button style={classes.Auth} clicked={() => props.logout({})}>Logout</Button>
    </React.Fragment>
  ) : (
    <Button style={classes.Auth} clicked={() => props.login({})}>Log in</Button>
  );
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
      {loggedIn}
    </ul>
  );
};

export default navigationItems;
