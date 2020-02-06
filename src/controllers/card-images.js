const CardImages = require("../models/card-images");
const sharp = require("sharp");

const uploadCardImage = async (req, res) => {
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
};

const getCardImage = async (req, res) => {
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
};

module.exports = {
  uploadCardImage,
  getCardImage,
};
