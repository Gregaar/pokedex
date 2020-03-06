import React, { useEffect, useState } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";

import { goToTop } from "../../shared/Utility";
import IndividualCard from "../IndividualCard/IndividualCard";
import Snorlax from "../../assets/snorlax.png";
import favoriteStyles from "./FavoriteStyles";
import sharedStyles from "../../shared/Styles";

const Favorites = (props) => {
  const { getTokenSilently } = useAuth0();
  const [favorites, setFavorites] = useState([]);
  const [showButton, setShowButton] = useState("none");
  const copiedFavorites = [...favorites];
  const classes = favoriteStyles();
  const sharedStyle = sharedStyles();
  let showFavorites;

  useEffect(() => {
    const getFavorites = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios
        .get(`/user/favorites`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setFavorites(res.data);
        })
        .catch((error) => {
          return error;
        });
    };
    getFavorites();
    return () => setFavorites([]);
  }, [getTokenSilently, props.history]);

  const scrollFunction = () => {
    if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
      setShowButton("block");
    } else {
      setShowButton("none");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFunction);
    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  const noFavorites = (
    <div className={classes.Container}>
      <div className={classes.Empty}>
        <h2>Looks like no Pokemon live here right now.</h2>
        <p>
          Go to the <Link to="/cardlist">Card List</Link> to pick your favorites!
        </p>
      </div>
      <img src={Snorlax} alt="A sleeping Snorlax" />
    </div>
  );

  if (copiedFavorites.length > 0) {
    showFavorites = copiedFavorites
      .sort((a, b) => a.pokemonId - b.pokemonId)
      .map((favorite) => <IndividualCard key={favorite.pokemonId} favoriteId={favorite.pokemonId} profileBtn />);
  } else {
    showFavorites = noFavorites;
  }

  return (
    <React.Fragment>
      <div>
        {showFavorites}{" "}
        <button className={sharedStyle.Sticky} style={{ display: showButton }} onClick={goToTop}>
          ^
        </button>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Favorites);
