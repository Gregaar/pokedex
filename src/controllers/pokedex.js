const config = require("config");
const createPokemonSpeciesClient = require("../services/get-pokemon-species");
const pokeSearch = require("../services/get-pokemon-id");
const { getTrainerSkill, firstFavoritedPokemon, getFavorites } = require("../services/get-pokemon-trainer-info");
const FavoritePokemon = require("../models/favorite-pokemon");

const getPokemonInfo = async (req, res) => {
  if (req.params.id > 151 || req.params.id < 1) {
    return res.status(400).send();
  } else {
    try {
      const pokemonInfoClient = createPokemonSpeciesClient(config.get("pokeapi.baseUrl"));
      const info = await pokemonInfoClient(req.params.id);

      if (!info) {
        return "Unable to find Pokemon";
      }

      return res.send(info);
    } catch (error) {
      return res.status(400).send(error);
    }
  }
};

const findPokemonByName = async (req, res) => {
  try {
    const pokemonId = await pokeSearch(req.query.search);
    if (!pokemonId) {
      return "Unable to find Pokemon";
    }
    return res.send(pokemonId);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const saveFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const alreadyFavorited = await FavoritePokemon.findOne({ userId, pokemonId: req.body.pokemonId });
    if (alreadyFavorited) {
      return res.send(true);
    } else {
      const pokemonInfoClient = createPokemonSpeciesClient(config.get("pokeapi.baseUrl"));
      const {
        genus: type,
        color,
        habitat: { habitat },
        captureChance,
        growthRate: { rate },
      } = await pokemonInfoClient(req.body.pokemonId);
      const pokemonToSave = new FavoritePokemon({
        userId,
        pokemonId: req.body.pokemonId,
        type,
        color,
        rate,
        habitat,
        captureChance,
      });
      if (!pokemonToSave) {
        return res.status(500).send("Unable to save to favorites.");
      }
      await pokemonToSave.save();
      return res.send();
    }
  } catch (error) {
    res.status(400).send(error);
  }
};

const getPokeTrainerInfo = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getSavedPokemon = await FavoritePokemon.find({ userId });

    if (!getSavedPokemon) {
      return res.status(404).send("No favorites found");
    }

    const favorites = ["color", "type", "habitat", "rate"];

    const trainerFavorites = getFavorites(getSavedPokemon, favorites);

    trainerFavorites.firstCatch = await firstFavoritedPokemon(getSavedPokemon);

    trainerFavorites.skillLevel = getTrainerSkill(getSavedPokemon);

    return res.send(trainerFavorites);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getAllFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getSavedPokemon = await FavoritePokemon.find({ userId });
    if (!getSavedPokemon) {
      return res.status(404).send("No favorites found");
    }
    return res.send(getSavedPokemon);
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getFavoritePokemonCount = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getSavedPokemon = await FavoritePokemon.find({ userId });
    if (!getSavedPokemon) {
      return res.send("0");
    }
    return res.send(getSavedPokemon.length.toString());
  } catch (error) {
    return res.status(400).send(error);
  }
};

const getOneFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getOnePokemon = await FavoritePokemon.findOne({ userId, pokemonId: req.body.pokemonId });
    if (!getOnePokemon) {
      return res.status(404).send();
    } else {
      return res.send("true");
    }
  } catch (error) {
    return res.status(400).send();
  }
};

const deleteFavoritePokemon = async (req, res) => {
  try {
    const userId = req.user.sub.split("|")[1];
    const getPokemon = await FavoritePokemon.deleteOne({ userId, pokemonId: req.body.pokemonId });
    if (!getPokemon) {
      return res.status(404).send();
    }
    return res.send();
  } catch (error) {
    return res.status(400).send();
  }
};

module.exports = {
  getPokemonInfo,
  findPokemonByName,
  saveFavoritePokemon,
  getPokeTrainerInfo,
  getAllFavoritePokemon,
  getOneFavoritePokemon,
  getFavoritePokemonCount,
  deleteFavoritePokemon,
};
