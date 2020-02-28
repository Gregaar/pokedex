import React from "react";

import contactStyles from "../Contact/ContactStyles";

const contact = props => {
  const classes = contactStyles();
  return (
    <div className={classes.Container}>
      <div className={classes.ContactInfo}>
        <h2>Github</h2>
        <a href="https://github.com/Gregaar" target="_blank">Have a look at my other projects!</a>
        <h2>Email</h2>
        <a href="mailto:gregor@yokerit.ga?Subject=Pokemon%20Nostalgia%20Question" target="_top">Send me an Email!</a>
        <h2>LinkedIn</h2>
        <a href="https://www.linkedin.com/in/gregor-frame-528421124/" target="_blank">Check out my experience!</a>
      </div>
    </div>
  );
};

export default contact;