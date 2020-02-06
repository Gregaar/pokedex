import React, { useState, useEffect } from "react";
import { shuffle } from "lodash";
import Image from "./Image/Image";
import jumbotronStyles from "./JumbotronStyles";
import axios from "axios";

const Jumbotron = (props) => {
  const [imageState, setImageState] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      await axios
        .get("/pokemon/card_images/")
        .then((res) => {
          setImageState(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    fetchCards();
  }, []);

  let images;
  if (imageState) {
    const imagesCopy = [...imageState];
    const shuffledImages = shuffle(imagesCopy);
    images = shuffledImages.map((img) => (
      <Image key={img._id} src={btoa(String.fromCharCode.apply(null, img.image.data.data))} alt={`An image on a Pokemon card`}/>
    ));
  } else {
    return <div>Loading...</div>;
  }

  const classes = jumbotronStyles();

  return (
    <div className={classes.Jumbotron}>
      <div className={classes.CardGrid}>{images}</div>
    </div>
  );
};

export default Jumbotron;
