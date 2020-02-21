const mongoose = require("mongoose");

const imgurCardsSchema = new mongoose.Schema(
  {
    imageId: {
      type: String,
      required: true,
    },
    pokedexEntry: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

const ImgurCards = mongoose.model("ImgurCards", imgurCardsSchema);

module.exports = ImgurCards;
