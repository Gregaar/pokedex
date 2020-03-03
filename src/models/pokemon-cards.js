const mongoose = require("mongoose");

const pokemonCardsSchema = new mongoose.Schema(
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

const PokemonCards = mongoose.model("PokemonCards", pokemonCardsSchema);

module.exports = PokemonCards;
