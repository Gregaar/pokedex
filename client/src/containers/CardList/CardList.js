import React, { useState, useEffect } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";
import { updateArray, goToTop } from "../../shared/Utility";

import sharedStyles from "../../shared/Styles";
import cardListStyles from "./CardListStyles";

import Modal from "../../components/UI/Modal/Modal";
import Image from "../../components/Image/Image";
import Button from "../../components/UI/Button/Button";

const CardList = (props) => {
  const { getTokenSilently } = useAuth0();
  const [imageState, setImageState] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showButton, setShowButton] = useState("none");
  const imageStateCopy = [...imageState];
  const classes = cardListStyles();
  const sharedStyle = sharedStyles();

  const getImgurIds = async (page) => {
    const token = await getTokenSilently();
    if(!token) {
      return props.history.push("/");
    }
    await axios
      .get(`/images/cards?page=${page}&limit=12`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((res) => {
        return setImageState(updateArray(imageState, res.data.results)); ///update object and add in next object
      })
      .catch((error) => {
        return error;
      });
  };

  const searchCardHandler = async (event) => {
    event.preventDefault();
    event.persist();
    const token = await getTokenSilently();
    if(!token) {
      return props.history.push("/");
    }
    const pokemonId = await axios
      .get(`/cardlist?search=${event.target[0].value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        }})
      .then((res) => {
        return +res.data;
      })
      .catch((error) => {
        return error;
      });
      if (pokemonId > 0) {
        goToCard(pokemonId);
      } else {
        setShowModal(true);
      }
  };

  useEffect(() => {
    getImgurIds(page);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  };

  const fetchMoreListItems = async () => {
    setPage(page + 1);
    setIsFetching(false);
  };

  const goToCard = (pokedexId) => {
    props.history.push({
      pathname: `/cardlist/${pokedexId}`,
    });
  };

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

  return (
    <div className={classes.Container}>

      <div className={classes.CardGrid}>

        <Modal show={showModal} clicked={() => setShowModal(!showModal)}>Unable to find Pokemon</Modal>

        <form onSubmit={(event) => searchCardHandler(event)}>
          <label htmlFor={"search"}>Pokedex Search</label>
          <input id="search" type="search" placeholder="Search by Pokemon Name" />
          <Button style={classes.Pokedex}/>
        </form>{" "}

        {imageStateCopy
          .sort((a, b) => a.pokedexEntry > b.pokedexEntry)
          .map((image) => (
            <Image
              key={image.pokedexEntry}
              imageId={image.imageId}
              clicked={() => goToCard(image.pokedexEntry)}
            />
          ))}

          <button className={sharedStyle.Sticky} style={{display: showButton}} onClick={goToTop}>^</button>
      </div>

    </div>
  );
};

export default withRouter(CardList);
