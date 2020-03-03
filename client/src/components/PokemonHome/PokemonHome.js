import React from "react";
import Landing from "../../containers/Landing/Landing";

import pokemonHomeStyles from "./PokemonHomeStyles";

const pokemonhome = (props) => {
  const classes = pokemonHomeStyles();
  return !props.isAuth ? (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <h1>Welcome to Kanto Cards</h1>
        <p>
          Once logged in, you'll be able to browse the complete collection of original cards, along with some
          supplmentary information about each Pokemon.
        </p>
        <p>When you're ready, please feel free to make an account and start your sweet, sweet nostalgia trip!</p>
        <p>Otherwise, enjoy viewing my own card collection below.</p>
      </div>
      <Landing />
    </div>
  ) : (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <h1>Welcome to Kanto Cards</h1>
        <p>
          Now that you're logged in, head over to the Card List page where you can browse through the complete original
          card collection of the First Generation Pokemon.
        </p>
        <p>You can also take a look at some of my own Kanto cards below. </p>
        <p>Enjoy!</p>
      </div>
      <Landing />
    </div>
  );
};

export default pokemonhome;
