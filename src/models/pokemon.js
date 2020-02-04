const mongoose = require("mongoose");

const pokemonSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  stats: {
    type: Object,
  },
  abilities: {
    type: Object,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  sprites: {
    type: Object,
  },
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

module.exports = Pokemon;
