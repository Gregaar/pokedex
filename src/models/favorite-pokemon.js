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
  delete FavoriteObject.createdAt;
  delete FavoriteObject.updatedAt;
  delete FavoriteObject.__v;

  return FavoriteObject;
};

const FavoritePokemon = mongoose.model("FavoritePokemon", favoritePokemonSchema);

module.exports = FavoritePokemon;
