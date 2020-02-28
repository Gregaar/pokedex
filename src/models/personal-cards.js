const mongoose = require("mongoose");

const personalCardsSchema = new mongoose.Schema(
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

const PersonalCards = mongoose.model("PersonalCards", personalCardsSchema);

module.exports = PersonalCards;
