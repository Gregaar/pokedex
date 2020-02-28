const config = require("config");
const createPokemonSpeciesClient = require("../services/get-pokemon-species");
const pokeSearch = require("../services/get-pokemon-id");
const FavoritePokemon = require("../models/favorite-pokemon");

const search = async (req, res) => {
  if (req.params.id > 151 || req.params.id < 1) {
    res.status(400).send();
  } else {
    try {
      const pokemonInfoClient = createPokemonSpeciesClient(config.get("pokeapi.baseUrl"));
      const info = await pokemonInfoClient(req.params.id);

      if (!info) {
        return "Unable to find Pokemon";
      }

      res.status(200).send(info);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

const findPokemonByName = async (req, res) => {
  try {
    const pokemonId = await pokeSearch(req.query.search);
    if (!pokemonId) {
      return "Unable to find Pokemon";
    }
    res.status(200).send(pokemonId);
  } catch (error) {
    res.status(400).send(error);
  }
};

const saveFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const alreadyFavorited = await FavoritePokemon.findOne({ userId, pokemonId: req.body.pokemonId });
    if (alreadyFavorited) {
      return res.send(true);
    } else {
      const pokemonToSave = new FavoritePokemon({ userId, pokemonId: req.body.pokemonId });
      if (!pokemonToSave) {
        res.status(400).send("Unable to save to favorites.");
      }
      await pokemonToSave.save();
      res.send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getSavedPokemon = await FavoritePokemon.find({ userId });
    if (!getSavedPokemon) {
      res.status(400).send("No favorites found");
    }
    return res.send(getSavedPokemon);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getOneFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getOnePokemon = await FavoritePokemon.findOne({ userId, pokemonId: req.body.pokemonId });
    if (!getOnePokemon) {
      res.status(404).send("false");
    } else {
      res.send("true");
    }
  } catch (error) {
    res.status(400).send("false");
  }
};

const deleteFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getPokemon = await FavoritePokemon.deleteOne({ userId, pokemonId: req.body.pokemonId });
    if (!getPokemon) {
      res.status(404).send();
    }
    res.send();
  } catch (error) {
    res.status(400).send();
  }
};

module.exports = {
  search,
  findPokemonByName,
  saveFavoritePokemon,
  getAllFavoritePokemon,
  getOneFavoritePokemon,
  deleteFavoritePokemon,
};
