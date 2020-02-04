const pokeSearch = require("../services/get-pokemon-id");
const config = require("config");
const createPokemonSpeciesClient = require("../services/get-pokemon-species");

const search = async (req, res) => {
  try {
    const pokedexId = await pokeSearch(req.query.pokemon);
    const pokemonInfoClient = createPokemonSpeciesClient(config.get("pokeapi.baseUrl"));
    const info = await pokemonInfoClient(pokedexId);

    if (!info) {
      return "Unable to find Pokemon";
    }

    res.send(info);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  search,
};
