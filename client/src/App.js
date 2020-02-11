import React from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import PokemonHome from "./containers/PokemonHome/PokemonHome";
import Auth from "./containers/Auth/Auth";
import "./App.css";

function App() {
  let routes = (
    <Switch>
      <Route path="/signup" exact page={"signup"} component={(props) => <Auth page={"signup"} {...props} />} />
      <Route path="/login" exact component={(props) => <Auth page={"login"} {...props} />} />
      <Route path="/" exact component={PokemonHome} />
    </Switch>
  );
  return (
    <div>
      <Layout>{routes}</Layout>
    </div>
  );
}

export default App;
