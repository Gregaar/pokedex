const { Router } = require("express");
const { logger } = require("../logger");
const path = require("path");
const checkJwt = require("../middleware/auth");
const paginatedResults = require("../middleware/pagination");
const PersonalCards = require("../models/personal-cards");
const PokemonCards = require("../models/pokemon-cards");
const imgurController = require("../controllers/imgur-cards");

const router = new Router();

router.get("/images/personalcards", paginatedResults(PersonalCards), (req, res) => {
  res.send(res.paginatedResults);
});

router.get("/images/cards", checkJwt, paginatedResults(PokemonCards), (req, res) => {
  res.send(res.paginatedResults);
});

router.get("/images/cards/:id", checkJwt, imgurController.getOneCardImage);

router.use("*", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../../client/build"));
});

module.exports = () => {
  logger.info("Registering 'images' routes...");

  return router;
};
