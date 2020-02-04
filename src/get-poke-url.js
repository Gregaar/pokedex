const Pokedex = require("./pokedex");

const pokeSearch = async name => {
  try {

    const kantoPokemon = await Pokedex.getPokedexByName("kanto");

    const pokeEntries = kantoPokemon["pokemon_entries"];

    const pokeFind = pokeEntries.find(poke => {

      return name.toLowerCase() === poke.pokemon_species.name;

    });

    if(!pokeFind){
        return `Unable to find ${name} in the Pokedex`;
    };

    const pokeURL = pokeFind.pokemon_species.url;

    return pokeURL;

  } catch (error) {

    return "ERROR: Unable to connect to the Pokedex";

  };

};

module.exports = pokeSearch;
