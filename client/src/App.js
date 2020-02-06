import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import PokemonHome from "./containers/PokemonHome/PokemonHome";
import "./App.css";

function App() {
  return (
    <div>
      <Route path="/" exact component={PokemonHome} />
    </div>
  );
}

export default App;
