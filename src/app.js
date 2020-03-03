const express = require("express");
const commonMiddleware = require("./middleware");
const pokemonRouter = require("./routes/pokemon");
const imageRouter = require("./routes/images");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (request, response) => {
  response.sendFile(path.join(__dirname, "../client/build", "index.html"));
});

app.use(commonMiddleware());
app.use(imageRouter());
app.use(pokemonRouter());

module.exports = app;
