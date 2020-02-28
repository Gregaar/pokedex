import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "./react-auth0-spa";
import history from "./shared/history";
import PrivateRoute from "./hoc/Private-Route/Private-Route";

import ScrollToTop from "./hoc/ScrollToTop/ScrollToTop";
import Layout from "./hoc/Layout/Layout";
import PokemonHome from "./components/PokemonHome/PokemonHome";
import CardList from "./containers/CardList/CardList";
import Profile from "./components/Profile/Profile";
import IndividualCard from "./containers/IndividualCard/IndividualCard";
import Favorites from "./containers/Favorites/Favorites";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.css";

function App() {
  const { isAuthenticated, loading } = useAuth0();

  if (loading) {
    return <div style={{backgroundColor: "#ffcd1e", height: "100vh"}}></div>;
  }

  let routes = null;

  routes = (
    <ScrollToTop>
      <Switch>
        <PrivateRoute path="/favorites" exact component={Favorites} />
        <PrivateRoute path="/cardlist" exact component={CardList} />
        <PrivateRoute path="/cardlist/:id" exact component={IndividualCard} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/" exact component={() => <PokemonHome isAuth={isAuthenticated} />} />
      </Switch>
    </ScrollToTop>
  );

  return (
    <div className="App">
      <Router history={history}>
        <Layout>{routes}</Layout>
      </Router>
    </div>
  );
}

export default App;
