const fetch = require("node-fetch");
const englishText = require("./get-english-text");
const urlId = require("./get-url-id")

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
    genus: json.genera[englishText(json.genera)].genus,
    ...(json.evolves_from_species && { evolvesFrom: json.evolves_from_species }),
    evolutionChainId: urlId(json.evolution_chain.url),
    growthRate: {
      rate: json.growth_rate.name,
      id: urlId(json.growth_rate.url),
    },
    color: json.color.name,
    habitat: {
      habitat: json.habitat.name,
      id: urlId(json.habitat.url),
    },
    shape: json.shape.name,
    eggGroups: json.egg_groups,
    baseHappiness: json.base_happiness,
    captureChance: json.capture_rate,
    flavorText: json.flavor_text_entries[englishText(json.flavor_text_entries)].flavor_text,
  };
};
