import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
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

  const getFavorite = async (pokemonId) => {
    const token = await getTokenSilently();
    await axios({
      method: "post",
      url: "/user/favorites",
      data: {
        pokemonId,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        res.data === true ? setFavorite(true) : setFavorite(false);
      })
      .catch((error) => {
        setFavorite(false);
        return error;
      });
  };

  const getCardInfo = async (id) => {
    const token = await getTokenSilently();
    if (!token) {
      props.history.push("/");
    }
    await axios
      .get(`/cardlist/${id}`, {
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

  const getImgurCardId = async (id) => {
    const token = await getTokenSilently();
    if (!token) {
      props.history.push("/");
    }
    await axios
      .get(`/images/cards/${id}`, {
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
    getFavorite(urlId);
    getImgurCardId(urlId);
    getCardInfo(urlId);
    return () => {
      setImageId(null);
    }
  }, [urlId]);

  let pokemonButtons = props.favoriteId ? null : urlId > 1 && urlId < 151 ? (
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

  const redirect =
    urlId > 151 || (urlId < 1 && !location.pathname.includes("profile")) ? <Redirect to="/cardlist" /> : null;

  const checkFavStyle = favorite ? classes.YellowBtn : classes.GreenBtn;

  return (
    <div className={classes.Container}>
      {redirect}
      <div className={classes.ButtonContainer}>
        {props.favoriteId ? null : (
          <Button
            clicked={() =>
              props.history.push({
                pathname: "/cardlist",
              })
            }
          >
            Back to Card List
          </Button>
        )}
        {pokemonButtons}
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

export default IndividualCard;
