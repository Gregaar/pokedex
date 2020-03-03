const express = require("express");
const commonMiddleware = require("./middleware");
const pokemonRouter = require("./routes/pokemon");
const imageRouter = require("./routes/images");
const path = require("path");

const app = express();

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(commonMiddleware());
app.use(imageRouter());
app.use(pokemonRouter());

module.exports = app;
