import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { updateArray } from "../../shared/Utility";

import cardListStyles from "./CardListStyles";

import Image from "../../components/Image/Image";

const CardList = (props) => {
  const [imageState, setImageState] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);

  const getImgurIds = async (page) => {
    await axios
      .get(`/imgur/get/imgur_cards?page=${page}&limit=12`)
      .then((res) => {
        return setImageState(updateArray(imageState, res.data.results)); ///update object and add in next object
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
      getImgurIds(page);
  }, [page])

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

  const classes = cardListStyles();

  return (
    <div className={classes.Container}>
      <div className={classes.CardGrid}>
        {" "}
        {imageState
          .sort((a, b) => a.pokedexEntry > b.pokedexEntry)
          .map((image) => (
            <Image
              key={image.pokedexEntry}
              imageId={image.imageId}
              clicked={() => goToCard(image.pokedexEntry, image.imageId)}
            />
          ))}
      </div>
    </div>
  );
};

export default withRouter(CardList);
