const { Router } = require("express");
const pokedexController = require("../controllers/pokedex");

const router = new Router();

// router.post("/party/add", async (req, res) => {
//   const getPokemonToAdd = await getPokemon(req.query.pokemon);
//   const pokemon = new Pokemon(getPokemonToAdd);
//   try {
//     await pokemon.save();
//     res.status(201).send(pokemon);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

router.get("/pokedex/search", pokedexController.search);

module.exports = router;
