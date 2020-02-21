const config = require("config");
const createPokemonSpeciesClient = require("../services/get-pokemon-species");

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

      res.send(info);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};

module.exports = {
  search,
};
