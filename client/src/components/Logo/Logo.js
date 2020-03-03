import React from "react";

import pokeLogo from "../../assets/logo.png";
import logoStyles from "./LogoStyles";

const logo = (props) => {
  const classes = logoStyles();

  const logoStyle = props.menu ? classes.Logo : `${classes.Logo} ${classes.LogoRight}`;
  return (
    <div className={logoStyle} style={{ height: props.height }}>
      <img src={pokeLogo} alt="Pokeball Logo" />
    </div>
  );
};

export default logo;
