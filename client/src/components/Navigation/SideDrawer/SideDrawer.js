import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import Backdrop from "../../UI/Backdrop/Backdrop";
import sideDrawerStyles from "./SideDrawerStyles";

const sideDrawer = (props) => {
  const classes = sideDrawerStyles();

  let drawerClasses = !props.open ? `${classes.SideDrawer} ${classes.Closed}` : `${classes.SideDrawer} ${classes.Open}`;

  return (
    <React.Fragment>
      <Backdrop show={props.open} closed={props.closed} />
      <div className={drawerClasses} onClick={props.closed}>
        <div className={classes.Logo}>
          <Logo menu />
        </div>
        <nav>
          <NavigationItems login={props.login} logout={props.logout} auth={props.auth} />
        </nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
