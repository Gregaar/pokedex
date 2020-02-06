const { Router } = require("express");
const { logger } = require("../logger");
const upload = require("../middleware/multer");
const imageController = require("../controllers/card-images");

const router = new Router();

router.post("/pokemon/card_images/upload", upload.single("card"), imageController.uploadCardImage);

router.get("/pokemon/card_images", imageController.getCardImage);

module.exports = () => {
  logger.info("Registering 'images' routes...");

  return router;
};
