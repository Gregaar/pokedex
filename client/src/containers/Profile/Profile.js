import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";

import LoadingSpinner from "../../components/UI/Spinner/Spinner";
import profileStyles from "./ProfileStyles";

const Profile = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [trainerFavorites, setTrainerFavorites] = useState({});
  const classes = profileStyles();

  useEffect(() => {
    const getFavCount = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios({
        method: "get",
        url: "/user/favorites/count",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return setFavoriteCount(+res.data);
        })
        .catch((error) => {
          return error;
        });
    };
    getFavCount();
    return () => setFavoriteCount(0);
  }, [getTokenSilently, props.history]);

  useEffect(() => {
    const getTrainerFavorites = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios({
        method: "get",
        url: "/trainer/info",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return setTrainerFavorites(res.data);
        })
        .catch((error) => {
          return error;
        });
    };
    getTrainerFavorites();
    return () => setTrainerFavorites([]);
  }, [getTokenSilently, props.history]);

  if (loading || !user) {
    return <LoadingSpinner />;
  }

  // Profile Display
  user.picture = "https://i.imgur.com/AoNvY28.png";

  if (user.name.includes("@")) {
    const beforeProvider = user.name.indexOf("@");
    user.name = user.name.toUpperCase().slice(0, beforeProvider);
  };
  
  // Trainer Favorites
  let displayFavorites = <h2>Favorite some Pokemon to generate your Trainer Profile!</h2>;
  if (Object.entries(trainerFavorites).length !== 0 && trainerFavorites.constructor === Object) {
    displayFavorites = (
      <React.Fragment>
        <h4>Pokemon Captured: {favoriteCount}</h4>
        <div className={classes.Favorites}>
          <h4>Favorite Color:</h4>
          <p>{trainerFavorites.color}</p>

          <h4>Favorite Type:</h4>
          <p>{trainerFavorites.type}</p>

          <h4>Favorite Location:</h4>
          <p>{trainerFavorites.habitat === "rare" ? "Unknown" : `${trainerFavorites.habitat}`}</p>

          <h4>Longest Captured:</h4>
          <p>{trainerFavorites.firstCatch}</p>
          <h4>Average Pokemon Growth Rate:</h4>
          <p>{trainerFavorites.rate}</p>

          <h4>Overall Skill Level:</h4>
          <p>{trainerFavorites.skillLevel}</p>
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <img src={user.picture} alt="Profile" />
        <h2>Pokemon Trainer</h2>
        <h3>{user.name}</h3>
        {displayFavorites}
        <h5>PokeMail: {user.email}</h5>
      </div>
    </div>
  );
};

export default withRouter(Profile);
