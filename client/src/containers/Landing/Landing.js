import React, { useState, useEffect } from "react";
import axios from "axios";

import { updateArray, goToTop } from "../../shared/Utility";
import Image from "../../components/Image/Image";

import landingStyles from "./LandingStyles";
import sharedStyles from "../../shared/Styles";

const Landing = () => {
  const [imageState, setImageState] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showButton, setShowButton] = useState("none");
  const [page, setPage] = useState(1);
  const sharedStyle = sharedStyles();
  const classes = landingStyles();
  let images;

  useEffect(() => {
    const getPersonalImgurIds = async () => {
      await axios
        .get(`/images/personalcards?page=${page}&limit=12`)
        .then((res) => {
          return setImageState(updateArray(imageState, res.data.results));
        })
        .catch((error) => {
          return error;
        });
    };
    getPersonalImgurIds();
  }, [page]);

  useEffect(() => {
    if (!isFetching) return;
    const fetchMoreListItems = async () => {
      setPage(page + 1);
      setIsFetching(false);
    };
    fetchMoreListItems();
  }, [isFetching, page]);

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
    window.scrollTo(0, document.body.scrollHeight);
  };

  if (imageState) {
    const imagesCopy = [...imageState];
    images = imagesCopy.map((img) => <Image key={img._id} imageId={img.imageId} />);
  } else {
    return <div>Loading...</div>;
  }

  return (
    <div className={classes.Landing}>
      <div className={classes.CardGrid}>
        {images}
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

export default Landing;
