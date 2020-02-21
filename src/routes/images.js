const { Router } = require("express");
const { logger } = require("../logger");
const upload = require("../middleware/multer");
const paginatedResults = require("../middleware/pagination");
const ImgurCards = require("../models/imgur-cards");
const imageController = require("../controllers/card-images");
const imgurController = require("../controllers/imgur-cards");

const router = new Router();

router.post("/pokemon/card_images/upload", upload.single("card"), imageController.uploadCardImage);

router.get("/pokemon/card_images", imageController.getCardImage);

router.get("/imgur/save/imgur_cards", imgurController.saveImgurIds);

router.get("/imgur/get/imgur_cards", paginatedResults(ImgurCards), (req, res) => {
  res.send(res.paginatedResults);
});

router.get("/imgur/:id", imgurController.getOneCardImage);

module.exports = () => {
  logger.info("Registering 'images' routes...");

  return router;
};
