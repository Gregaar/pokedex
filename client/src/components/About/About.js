import React from "react";
import { Link } from "react-router-dom"

import aboutStyles from "./AboutStyles";

const about = props => {
  const classes = aboutStyles();
  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
      <h2>Why was this site created?</h2>
      <p>I've been teaching myself web development since October 2019.</p>
      <p>I created this site as my first MERN stack project.</p>
      <h2>Where did the Pokemon Images come from?</h2>
      <p><a href="https://imgur.com/a/CERezES" target="_blank">An imgur album</a>.</p>
      <h2>Where did the Pokemon Information come from?</h2>
      <p>From the <a href="https://pokeapi.co/" target="_blank">Poke API</a>.</p>
      <h2>How long did this take to create?</h2>
      <p>Roughly a month, due to continous research and learning throughout the development process.</p>
      <h2>Any other questions?</h2>
      <p>Check out the <Link to="/contact">Contact</Link> page to get in touch with me.</p>
      </div>
    </div>
  );
};

export default about;