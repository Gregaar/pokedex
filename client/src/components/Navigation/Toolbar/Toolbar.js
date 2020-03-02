import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import toolbarStyles from "./ToolbarStyles";

const toolbar = (props) => {
  const classes = toolbarStyles();

  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={props.toggleClicked} />
      <div className={classes.Logo}>
        <Logo height="80%" />
      </div>
      <nav>
        <NavigationItems auth={props.auth} login={props.login} logout={props.logout} />
      </nav>
    </header>
  );
};

export default React.memo(toolbar);
