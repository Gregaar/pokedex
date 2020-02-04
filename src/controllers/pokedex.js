const getPokemonGeneralInfo = require("../services/get-poke-info");
const pokeSearch = require("../services/get-poke-url");

const search = async (req, res) => {
  try {
    const pokemonURL = await pokeSearch(req.query.pokemon);

    getPokemonGeneralInfo(pokemonURL, (error, pokeData) => {
      if (error) {
        res.send(error);
      }
      res.send(pokeData);
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = {
  search,
};
