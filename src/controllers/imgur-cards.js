const imgur = require("imgur");
const ImgurCards = require("../models/imgur-cards");

const pokemonCardsAlbum = "CERezES";

const getAlbum = async () => {
  let pokeArray = [];
  await imgur
    .getAlbumInfo(pokemonCardsAlbum)
    .then((res) => {
      return (pokeArray = res.data.images);
    })
    .catch((error) => {
      return error;
    });
  return pokeArray;
};

const saveImgurIds = async (req, res) => {
  try {
    const images = await getAlbum();
    images.forEach(async (image) => {
      const imgurCard = new ImgurCards({ imageId: image.id, pokedexEntry: +image.description });
      await imgurCard.save();
      return;
    });
    res.send();
  } catch (error) {
    return error;
  }
};

const getOneCardImage = async (req, res) => {
  if (req.params.id > 151 || req.params.id < 1) {
    res.status(400).send();
  } else {
    try {
      const findCard = await ImgurCards.findOne({ pokedexEntry: req.params.id });
      res.send(findCard.imageId);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

module.exports = {
  saveImgurIds,
  getOneCardImage,
};

// Find a way to link the Poke API and the images.
// When clicking on a card, it will take you to for example /card/:id
// Here, it will display information about the Pokemon fed from the API
// implement pagination, show e.g. 10 cards per page.
