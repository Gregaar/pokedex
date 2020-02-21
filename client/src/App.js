import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import history from "./shared/history";
import PrivateRoute from "./hoc/Private-Route/Private-Route";

import Layout from "./hoc/Layout/Layout";
import PokemonHome from "./components/PokemonHome/PokemonHome";
import CardList from "./containers/CardList/CardList";
import Profile from "./components/Profile/Profile";
import IndividualCard from "./containers/IndividualCard/IndividualCard";
import "./App.css";

function App() {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  let routes = null;

  routes = (
      <Switch>
        <Route path="/" exact component={PokemonHome} />
        <Route path="/cardlist" exact component={CardList}/>
        <Route path="/cardlist/:id" exact component={IndividualCard}/>
        <PrivateRoute path="/profile" component={Profile} />
      </Switch>
    
  );

  return (
    <div className="App">
      <Router history={history}>
      <Layout>
        {routes}
      </Layout>
      </Router>
    </div>
  );
}

export default App;
