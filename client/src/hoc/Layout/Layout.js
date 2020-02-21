import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import Footer from "../../components/Navigation/Footer/Footer";
// import layoutStyles from './LayoutStyles';

const Layout = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <React.Fragment>
      <Toolbar auth={isAuthenticated} login={loginWithRedirect} logout={logout}/>
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
