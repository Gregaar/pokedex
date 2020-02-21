const { Router } = require("express");
const pokedexController = require("../controllers/pokedex");

const { logger } = require("../logger");

const router = new Router();

router.get("/cardlist/:id", pokedexController.search);

module.exports = () => {
  logger.info("Registering 'party' routes...");

  return router;
};
