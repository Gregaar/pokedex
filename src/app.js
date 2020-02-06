const express = require("express");
const commonMiddleware = require("./middleware");
const partyRouter = require("./routes/party");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

// app.use("/pokedex/search", example);
app.use(commonMiddleware());
app.use(partyRouter());

module.exports = app;
