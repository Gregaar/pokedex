const express = require("express");
const config = require("config");
const partyRouter = require("./routes/party");

const app = express();

app.use(express.json());
app.use(partyRouter);

module.exports = app;
