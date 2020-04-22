const getPokemonName = require("./get-pokemon-name");

// 255 is the highest and easiest capture chance. 1 is the lowest and hardest.
const getTrainerSkill = (favorites) => {
  const totalCaptureChance = favorites
    .map((pokemon) => pokemon.captureChance)
    .reduce((accumulator, currentVal) => accumulator + currentVal, 0);
  const skillTotal = Math.round((totalCaptureChance / (favorites.length * 255)) * 100);
  let skillLevel = "";
  switch (true) {
    case skillTotal <= 10:
      skillLevel = "Master";
      break;
    case skillTotal <= 25:
      skillLevel = "Advanced";
      break;
    case skillTotal <= 50:
      skillLevel = "Intermediate";
      break;
    case skillTotal <= 75:
      skillLevel = "Beginner";
      break;
    default:
      skillLevel = "Rookie";
      break;
  }
  return skillLevel;
};

const firstFavoritedPokemon = async (favorites) => {
  const firstFavorite = favorites.sort((a, b) => a.createdAt - b.createdAt);
  const { name } = await getPokemonName(firstFavorite[0].pokemonId);
  return name;
};

const getFavorites = (favorites, properties) => {
  const trainerFavorites = {};
  properties.forEach((property) => {
    const favProperty = favorites.map((pokemon) => {
      return pokemon[property];
    });
    const counts = {};
    favProperty.forEach((fav) => {
      counts[fav] = (counts[fav] || 0) + 1;
    });
    const sortedCount = Object.entries(counts).sort((a, b) => a[1] - b[1]);
    const favorite = sortedCount[sortedCount.length - 1][0];

    return (trainerFavorites[property] = favorite);
  });
  return trainerFavorites;
};

module.exports = {
  getTrainerSkill,
  firstFavoritedPokemon,
  getFavorites,
};
