import React, { useState, useEffect } from "react";
import axios from "axios";

import { updateArray, goToTop } from "../../shared/Utility";
import Image from "../../components/Image/Image";

import landingStyles from "./LandingStyles";
import sharedStyles from "../../shared/Styles";

const Landing = (props) => {
  const [imageState, setImageState] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [showButton, setShowButton] = useState("none");
  const [page, setPage] = useState(1);
  const sharedStyle = sharedStyles();
  const classes = landingStyles();
  let images;

  const getPersonalImgurIds = async (page) => {
    await axios
      .get(`/images/personalcards?page=${page}&limit=12`)
      .then((res) => {
        return setImageState(updateArray(imageState, res.data.results));
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    getPersonalImgurIds(page);
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
        <button className={sharedStyle.Sticky} style={{display: showButton}} onClick={goToTop}>^</button>
        </div>
    </div>
  );
};

export default Landing;
