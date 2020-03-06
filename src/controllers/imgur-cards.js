const imgur = require("imgur");
const PokemonCards = require("../models/pokemon-cards");
const PersonalCards = require("../models/personal-cards");

const pokemonCardsAlbum = "CERezES";
const personalCardsAlbum = "MfB0XCU";

const getAlbum = async (album) => {
  let pokeArray = [];
  await imgur
    .getAlbumInfo(album)
    .then((res) => {
      return (pokeArray = res.data.images);
    })
    .catch((error) => {
      return error;
    });
  return pokeArray;
};

const savePokemonImgurIds = async () => {
  try {
    const checkCollection = await PokemonCards.find();
    if (checkCollection.length !== 0) {
      return;
    }
    const images = await getAlbum(pokemonCardsAlbum);
    images.forEach(async (image) => {
      const imgurCard = new PokemonCards({ imageId: image.id, pokedexEntry: +image.description });
      return await imgurCard.save();
    });
  } catch (error) {
    return error;
  }
};

const savePersonalImgurIds = async () => {
  try {
    const checkCollection = await PokemonCards.find();
    if (checkCollection.length !== 0) {
      return;
    }
    const images = await getAlbum(personalCardsAlbum);
    images.forEach(async (image) => {
      const imgurCard = new PersonalCards({ imageId: image.id, pokedexEntry: +image.description });
      return await imgurCard.save();
    });
  } catch (error) {
    return error;
  }
};

const getOneCardImage = async (req, res) => {
  if (req.params.id > 151 || req.params.id < 1) {
    return res.status(400).send();
  } else {
    try {
      const findCard = await PokemonCards.findOne({ pokedexEntry: req.params.id });
      return res.send(findCard.imageId);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

module.exports = {
  savePokemonImgurIds,
  savePersonalImgurIds,
  getOneCardImage,
};
