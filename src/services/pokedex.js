const Pokedex = require("pokedex-promise-v2");

module.exports = new Pokedex({
  protocol: "https",
  hostname: "localhost:3000",
  timeout: 5 * 1000,
});
