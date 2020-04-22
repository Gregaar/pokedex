const { Router } = require("express");
const path = require("path");
const pokedexController = require("../controllers/pokedex");
const checkJwt = require("../middleware/auth");

const { logger } = require("../logger");

const router = new Router();

router.get("/card", checkJwt, pokedexController.findPokemonByName);

router.get("/card/:id", checkJwt, pokedexController.getPokemonInfo);

router.get("/trainer/info", checkJwt, pokedexController.getPokeTrainerInfo);

router.post("/user/favorite", checkJwt, pokedexController.saveFavoritePokemon);

router.delete("/user/favorite", checkJwt, pokedexController.deleteFavoritePokemon);

router.get("/user/favorites", checkJwt, pokedexController.getAllFavoritePokemon);

router.get("/user/favorites/count", checkJwt, pokedexController.getFavoritePokemonCount);

router.post("/user/favorites", checkJwt, pokedexController.getOneFavoritePokemon);

module.exports = () => {
  logger.info("Registering 'party' routes...");

  return router;
};
