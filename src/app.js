const express = require("express");
const commonMiddleware = require("./middleware");
const pokemonRouter = require("./routes/pokemon");
const imageRouter = require("./routes/images");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => res.sendFile(path.resolve("../client/build", "index.html")));

app.use(commonMiddleware());
app.use(imageRouter());
app.use(pokemonRouter());

module.exports = app;
