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

  const searchCardHandler = async (event) => {
    event.preventDefault();
    event.persist();
    const token = await getTokenSilently();
    if (!token) {
      return props.history.push("/");
    }
    const pokemonId = await axios
      .get(`/card?search=${event.target[0].value}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
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
  
  const fetchMoreListItems = async () => {
    setPage(page + 1);
    setIsFetching(false);
  };

  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
  }, [isFetching, page]);

  const goToCard = (pokedexId) => {
    props.history.push({
      pathname: `/cardlist/${pokedexId}`,
    });
  };

  useEffect(() => {
    const getImgurIds = async () => {
      const token = await getTokenSilently();
      if (!token) {
        return props.history.push("/");
      }
      await axios
        .get(`/images/cards?page=${page}&limit=12`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          return setImageState(updateArray(imageState, res.data.results)); ///update object and add in next object
        })
        .catch((error) => {
          return error;
        });
    };
    getImgurIds(page);
  }, [page, getTokenSilently, props.history]);

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

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    setIsFetching(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToBottom = () => {
    window.scrollTo(0,document.body.scrollHeight);
    fetchMoreListItems();
  };

  return (
    <div className={classes.Container}>
      <div className={classes.CardGrid}>
        <Modal show={showModal} clicked={() => setShowModal(!showModal)}>
          Unable to find Pokemon
        </Modal>
        <form onSubmit={(event) => searchCardHandler(event)}>
          <label htmlFor={"search"}>Pokedex Search</label>
          <input id="search" type="search" placeholder="Search by Name" />
          <Button style={classes.Pokedex} />
        </form>{" "}
        {imageStateCopy
          .sort((a, b) => a.pokedexEntry > b.pokedexEntry)
          .map((image) => (
            <Image key={image.pokedexEntry} imageId={image.imageId} clicked={() => goToCard(image.pokedexEntry)} />
          ))}
        <button className={sharedStyle.StickyUp} style={{ display: showButton }} onClick={goToTop}>
        ↑ 
        </button>
        <button className={sharedStyle.StickyDown} style={{ display: showButton }} onClick={goToBottom}>
          ↓
        </button>
      </div>
    </div>
  );
};

export default withRouter(CardList);
