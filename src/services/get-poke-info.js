const request = require("request");
const fetch = require("node-fetch");

/**
 * To use this, you'd do something like this:
 *
 * const config = require('config');
 * const createPokemonInfoClient = require('./get-poke-info');
 *
 * const pokemonInfoClient = createPokemonInfoClient(config.get('pokeapi.baseurl'));
 * const info = await pokemonInfoClient('some-id');
 */
module.exports = (baseUrl) => async (id) => {
  const response = await fetch(`${baseUrl}/pokemon-species/${id}`);

  if (!response.ok) {
    throw Error("Something went wrong...?");
  }

  const json = await response.json();

  if (json.error) {
    throw Error("something else went wrong...?");
  }

  return {
    name: json.name,
    pokedexEntry: json.id,
    ...(json.evolves_from_species && { evolvesFrom: json.evolves_from_species }),
    color: json.color.name,
    habitat: json.habitat.name,
    captureChance: json.capture_rate,
    flavorText: json.flavor_text_entries[1].flavor_text,
  };
};

const getPokemonGeneralInfo = (url, callback) => {
  request.get({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to Pokedex", undefined);
    } else if (body.error) {
      callback("Unable to find Pokemon", undefined);
    } else {
      callback(undefined, {
        name: body.name,
        pokedexEntry: body.id,
        evolvesFrom: body.evolves_from_species.name,
        color: body.color.name,
        habitat: body.habitat.name,
        captureChance: body.capture_rate,
        flavorText: body.flavor_text_entries[1].flavor_text,
      });
    }
  });
};

module.exports = getPokemonGeneralInfo;
