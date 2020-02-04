const express = require("express");
const Pokemon = require("../models/pokemon");
const pokeSearch = require("../get-poke-url");
const getPokemonGeneralInfo = require("../get-poke-info");

const router = new express.Router();

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

router.get("/pokedex/search", async (req, res) => {
  try {
    const pokemonURL = await pokeSearch(req.query.pokemon);

    getPokemonGeneralInfo(pokemonURL, (error, pokeData) => {
      if (error) {
        res.send(error);
      }
      res.send(pokeData);
    });

  } catch {
    res.status(400).send(error);
  }
});

module.exports = router;
