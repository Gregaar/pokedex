import React from "react";

import NavigationItem from "../NavigationItems/NavigationItem/NavigationItem";
import footerStyles from "./FooterStyles";

const footer = (props) => {
  const classes = footerStyles();

  return (
    <footer className={classes.Footer}>
      <NavigationItem exact link="/about">
        About
      </NavigationItem>
      <NavigationItem exact link="/contact">
        Contact
      </NavigationItem>
    </footer>
  );
};

export default footer;
