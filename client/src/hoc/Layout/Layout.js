import React from "react";

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import Footer from '../../components/Navigation/Footer/Footer';
// import layoutStyles from './LayoutStyles';

const layout = (props) => {
  // const classes = layoutStyles();

  return (
    <React.Fragment>
      <Toolbar />
      {props.children}
      <Footer/>
    </React.Fragment>
  );
};

export default layout;
