const { Router } = require("express");
const pokedexController = require("../controllers/pokedex");
const sharp = require("sharp");
const { logger } = require("../logger");
const CardImages = require("../models/card-images");

const router = new Router();

router.get("/pokedex/search", pokedexController.search);

router.get("/hey", (req, res) => res.status(201).send("ho!"));

const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.JPG$/)) {
      return cb(new Error("Please upload a JPG file."));
    }
    cb(undefined, true);
  },
});

router.post("/pokemon/card_images/upload", upload.single("card"), async (req, res) => {
  try {
    const buffer = await sharp(req.file.buffer)
      .resize({ width: 300, height: 420 })
      .jpeg()
      .toBuffer();
    const cardImage = new CardImages();
    cardImage.image.data = buffer;
    cardImage.contentType = "image/jpg";
    await cardImage.save();
    res.send();
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.get("/pokemon/card_images/", async (req, res) => {
  try {
    const card = await CardImages.find({});
    if (!card) {
      return res.status(404).send();
    }
    res.set("Content-Type", "image/jpg");
    res.send(card);
  } catch (error) {
    return res.status(404).send();
  }
});

module.exports = () => {
  logger.info("Registering 'party' routes...");

  return router;
};
