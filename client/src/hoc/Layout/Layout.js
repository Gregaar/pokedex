import React, { useState } from "react";
import { useAuth0 } from "../../react-auth0-spa";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Navigation/Footer/Footer";

const Layout = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [showSideDrawer, setShowSideDrawer] = useState(false);

  const sideDrawerClosedHandler = () => {
    setShowSideDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setShowSideDrawer(!showSideDrawer);
  };

  return (
    <React.Fragment>
      <Toolbar
        auth={isAuthenticated}
        login={loginWithRedirect}
        logout={logout}
        toggleClicked={sideDrawerToggleHandler}
      />
      <SideDrawer
        auth={isAuthenticated}
        login={loginWithRedirect}
        logout={logout}
        closed={sideDrawerClosedHandler}
        open={showSideDrawer}
      />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
