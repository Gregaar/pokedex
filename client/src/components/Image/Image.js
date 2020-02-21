import React from "react";
import imageStyles from "./ImageStyles";

const image = (props) => {
  const classes = imageStyles();

  const style = props.style ? classes.Individual : classes.CardList

  const cardUrl = `https://i.imgur.com/${props.imageId}.jpg`;

  return <img className={style} src={cardUrl} alt={`A Pokemon card`} onClick={props.clicked} />;
};

export default image;
