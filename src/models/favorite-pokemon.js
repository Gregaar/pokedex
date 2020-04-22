const mongoose = require("mongoose");

const favoritePokemonSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    pokemonId: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    habitat: {
      type: String,
      required: true,
    },
    captureChance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

favoritePokemonSchema.methods.toJSON = function() {
  const favorite = this;
  const FavoriteObject = favorite.toObject();

  delete FavoriteObject._id;
  delete FavoriteObject.userId;
  delete FavoriteObject.updatedAt;
  delete FavoriteObject.__v;

  return FavoriteObject;
};

const FavoritePokemon = mongoose.model("FavoritePokemon", favoritePokemonSchema);

module.exports = FavoritePokemon;
