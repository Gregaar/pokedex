const fetch = require("node-fetch");
const config = require("config");

module.exports = async (id) => {
  const response = await fetch(`${config.get("pokeapi.baseUrl")}/pokemon-species/${id}`);

  if (!response.ok) {
    throw Error("Something went wrong...?");
  }

  const json = await response.json();

  if (json.error) {
    throw Error("something else went wrong...?");
  }

  return {
    name: json.name,
  };
};
