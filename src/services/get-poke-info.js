const request = require("request");

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
