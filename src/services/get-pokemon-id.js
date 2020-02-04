const Pokedex = require("./pokedex");

const pokeSearch = async (name) => {
  try {
    const kantoPokemon = await Pokedex.getPokedexByName("kanto");

    const monEntries = kantoPokemon["pokemon_entries"];
    const monFind = monEntries.find((mon) => {
      return name.toLowerCase() === mon.pokemon_species.name;
    });

    if (!monFind) {
      return `Unable to find ${name} in the Pokedex`;
    }

    const pokedexId = monFind.entry_number;
    return pokedexId;
  } catch (error) {
    return "ERROR: Unable to connect to the Pokedex";
  }
};

module.exports = pokeSearch;
