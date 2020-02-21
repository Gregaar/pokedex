import React, { useEffect, useState, useRef } from "react";
import { Redirect } from "react-router";
import { useLocation, withRouter } from "react-router-dom";
import axios from "axios";

import { updateObject } from "../../shared/Utility";
import Image from "../../components/Image/Image";
import Button from "../../components/UI/Button/Button";
import individualCardStyles from "./IndividualCardStyles";

const IndividualCard = (props) => {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [imageId, setImageId] = useState("");
  const location = useLocation();
  const urlId = +location.pathname.match(/(\d|\d\d|\d\d\d)$/g).join("");

  console.log(location);

  const getCardInfo = async (id) => {
    await axios
      .get(`/cardlist/${id}`)
      .then((res) => {
        return setPokemonDetails(updateObject(pokemonDetails, res.data));
      })
      .catch((error) => {
        return error;
      });
  };

  const getImgurCardId = async (id) => {
    await axios
      .get(`/imgur/${id}`)
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

  const backCardHandler = async (pokedexId) => {
    props.history.push({
      pathname: `/cardlist/${pokedexId - 1}`,
    });
  };

  useEffect(() => {
    getImgurCardId(urlId);
    getCardInfo(urlId);
  }, [urlId]);

  let pokemonButtons =
    urlId > 1 && urlId < 151 ? (
      <React.Fragment>
        <Button clicked={() => backCardHandler(urlId)}>Back</Button>
        <Button clicked={() => nextCardHandler(urlId)}>Next</Button>
      </React.Fragment>
    ) : urlId === 1 ? (
      <Button clicked={() => nextCardHandler(urlId)}>Next</Button>
    ) : urlId === 151 ? (
      <Button clicked={() => backCardHandler(urlId)}>Back</Button>
    ) : null;

  const classes = individualCardStyles();

  let redirect = urlId > 151 || urlId < 1 ? <Redirect to="/cardlist" /> : null;

  return (
    <div className={classes.Container}>
      {redirect}
      <div className={classes.ButtonContainer}>
        <Button
          clicked={() =>
            props.history.push({
              pathname: "/cardlist",
            })
          }
        >
          Card List
        </Button>
        {pokemonButtons}
      </div>
      <Image style imageId={imageId} />
      <div className={classes.InfoContainer}>
        <h2>Name</h2>
        <p>{pokemonDetails.name}</p>
        <h2>Pokedex Entry</h2>
        <p>{pokemonDetails.pokedexEntry}</p>
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
