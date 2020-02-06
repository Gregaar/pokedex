const mongoose = require("mongoose");

const cardImagesSchema = new mongoose.Schema(
  {
    image: {
      data: Buffer,
      ContentType: String,
    },
  },
  {
    timestamps: true,
  },
);

const CardImages = mongoose.model("CardImages", cardImagesSchema);

module.exports = CardImages;
