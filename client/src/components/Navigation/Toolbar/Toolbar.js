import React from "react";

import NavigationItems from "../NavigationItems/NavigationItems";
import toolbarStyles from "./ToolbarStyles";

const toolbar = (props) => {
  const classes = toolbarStyles();

  return (
    <header className={classes.Toolbar}>
      <nav>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
