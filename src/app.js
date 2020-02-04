const express = require("express");
const commonMiddleware = require("./middleware");
const partyRouter = require("./routes/party");

const app = express();

app.use(commonMiddleware());
app.use(partyRouter());

module.exports = app;
