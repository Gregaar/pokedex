import React from "react";

import drawerToggleStyles from "./DrawerToggleStyles";

const drawerToggle = (props) => {
  const classes = drawerToggleStyles();

  return (
    <div className={classes.DrawerToggle} onClick={props.clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
export default drawerToggle;
