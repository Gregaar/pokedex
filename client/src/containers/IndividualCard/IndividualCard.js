import React, { useEffect, useState } from "react";
import { Redirect, withRouter } from "react-router";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "../../react-auth0-spa";

import { updateObject } from "../../shared/Utility";
import Image from "../../components/Image/Image";
import Button from "../../components/UI/Button/Button";
import individualCardStyles from "./IndividualCardStyles";

const IndividualCard = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [imageId, setImageId] = useState("");
  const [favorite, setFavorite] = useState(false);
  const { getTokenSilently } = useAuth0();
  const location = useLocation();
  const classes = individualCardStyles();
  let urlId;

  if (props.favoriteId) {
    urlId = props.favoriteId;
  } else if (!location.pathname.match(/(\d|\d\d|\d\d\d)$/g)) {
    props.history.push("/cardlist");
  } else {
    urlId = +location.pathname.match(/(\d|\d\d|\d\d\d)$/g).join("");
  }

  const nextCardHandler = async (pokedexId) => {
    props.history.push({
      pathname: `/cardlist/${pokedexId + 1}`,
    });
  };

  const prevCardHandler = async (pokedexId) => {
    props.history.push({
      pathname: `/cardlist/${pokedexId - 1}`,
    });
  };

  const onFavoriteHandler = async (event, pokemonId) => {
    event.persist();
    const token = await getTokenSilently();
    if (!token) {
      props.history.push("/");
    }
    props.favoriteId || favorite
      ? await axios({
          method: "delete",
          url: "/user/favorite",
          data: {
            pokemonId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setFavorite(!favorite);
            return res;
          })
          .catch((error) => {
            return error;
          })
      : await axios({
          method: "post",
          url: "/user/favorite",
          data: {
            pokemonId,
          },
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((res) => {
            setFavorite(!favorite);
            return res;
          })
          .catch((error) => {
            return error;
          });
  };

  useEffect(() => {
    const getFavorite = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios({
        method: "post",
        url: "/user/favorites",
        data: {
          pokemonId: urlId,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => {
          return res.data ? setFavorite(true) : setFavorite(false);
        })
        .catch((error) => {
          setFavorite(false);
          return error;
        });
    };
    getFavorite();
    return () => setFavorite(false);
  }, [urlId, getTokenSilently, props.history]);

  useEffect(() => {
    const getImgurCardId = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios
        .get(`/images/cards/${urlId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return setImageId(res.data);
        })
        .catch((error) => {
          return error;
        });
    };
    getImgurCardId(urlId);
    return () => setImageId("");
  }, [urlId, getTokenSilently, props.history]);

  useEffect(() => {
    const getCardInfo = async () => {
      const token = await getTokenSilently();
      if (!token) {
        props.history.push("/");
      }
      await axios
        .get(`/cardlist/${urlId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return setPokemonDetails(updateObject(pokemonDetails, res.data));
        })
        .catch((error) => {
          return error;
        });
    };
    getCardInfo();
    return () => setPokemonDetails({});
  }, [urlId, getTokenSilently, props.history]);

  let navigationButtons = props.favoriteId ? null : urlId > 1 && urlId < 151 ? (
    <React.Fragment>
      <Button style={classes.YellowBtn} clicked={() => props.history.push("/favorites")}>
        Go to Favorites
      </Button>
      <Button clicked={() => prevCardHandler(urlId)}>Previous Pokemon</Button>
      <Button clicked={() => nextCardHandler(urlId)}>Next Pokemon</Button>
    </React.Fragment>
  ) : urlId === 1 ? (
    <React.Fragment>
      <Button style={classes.YellowBtn} clicked={() => props.history.push("/favorites")}>
        Go to Favorites
      </Button>
      <Button clicked={() => nextCardHandler(urlId)}>Next Pokemon</Button>
    </React.Fragment>
  ) : urlId === 151 ? (
    <React.Fragment>
      <Button style={classes.YellowBtn} clicked={() => props.history.push("/favorites")}>
        Go to Favorites
      </Button>
      <Button clicked={() => prevCardHandler(urlId)}>Previous Pokemon</Button>
    </React.Fragment>
  ) : null;

  const checkFavStyle = favorite ? classes.YellowBtn : classes.GreenBtn;

  return (
    <div className={classes.Container}>
      {urlId > 151 || (urlId < 1 && !location.pathname.includes("profile")) ? <Redirect to="/cardlist" /> : null}
      <div className={classes.ButtonContainer}>
        <Button
          clicked={() =>
            props.history.push({
              pathname: "/cardlist",
            })
          }
        >
          Back to Card List
        </Button>

        {navigationButtons}

        <Button style={checkFavStyle} clicked={(event) => onFavoriteHandler(event, urlId)}>
          {favorite ? "Unfavorite" : "Favorite"}
        </Button>
      </div>

      <Image style imageId={imageId} />

      <div className={classes.InfoContainer}>
        <h2>Name</h2>
        <p>{pokemonDetails.name}</p>
        <h2>Pokedex Entry</h2>
        <p>#{pokemonDetails.pokedexEntry}</p>
        <h2>Type</h2>
        <p>{pokemonDetails.genus}</p>
        <h2>Color</h2>
        <p>{pokemonDetails.color}</p>
        <h2>Shape</h2>
        <p>{pokemonDetails.shape}</p>
        <h2>Capture Chance</h2>
        <p>{pokemonDetails.captureChance}%</p>
      </div>
      <div className={classes.Description}>
        <h2>Description</h2>
        <p>{pokemonDetails.flavorText}</p>
      </div>
    </div>
  );
};

export default withRouter(IndividualCard);
