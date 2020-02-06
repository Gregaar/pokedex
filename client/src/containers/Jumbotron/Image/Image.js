import React from 'react';

const image = props => {
  return (
    <img src={"data:image/jpeg;base64," + props.src + ""} alt={props.alt}/>
  );
};

export default image;