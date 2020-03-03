import React, { useState, useEffect } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";

import LoadingSpinner from "../../components/UI/Spinner/Spinner";
import profileStyles from "./ProfileStyles";

const Profile = (props) => {
  const { loading, user, getTokenSilently } = useAuth0();
  const [favoriteCount, setFavoriteCount] = useState(0);
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

  if (loading || !user) {
    return <LoadingSpinner />;
  }

  // Profile Display
  user.picture = "https://i.imgur.com/AoNvY28.png";

  if (user.name.includes("@")) {
    const beforeProvider = user.name.indexOf("@");
    user.name = user.name.toUpperCase().slice(0, beforeProvider);
  }

  return (
    <div className={classes.Container}>
      <div className={classes.Info}>
        <img src={user.picture} alt="Profile" />
        <h2>Pokemon Trainer</h2>
        <h3>{user.name}</h3>
        <h4>Pokemon Caught: {favoriteCount}</h4>
        <h5>PokeMail: {user.email}</h5>
      </div>
    </div>
  );
};

export default withRouter(Profile);
