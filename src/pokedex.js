const P= require("pokedex-promise-v2");
const pokedexOptions = {
    protocol: 'https',
    hostname: 'localhost:3000',
    timeout: 5 * 1000,
};
const Pokedex = new P(pokedexOptions);

module.exports = Pokedex;
