import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import toolbarStyles from "./ToolbarStyles";


const toolbar = (props) => {
  const classes = toolbarStyles();

  return (
    <header className={classes.Toolbar}>
      <nav>
        <NavigationItems auth={props.auth} login={props.login} logout={props.logout}/>
      </nav>
    </header>
  );
};

export default toolbar;
