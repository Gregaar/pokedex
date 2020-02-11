const express = require("express");
const commonMiddleware = require("./middleware");
const userRouter = require("./routes/user");
const partyRouter = require("./routes/party");
const imageRouter = require("./routes/images");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));

app.use(commonMiddleware());
app.use(userRouter());
app.use(imageRouter());
app.use(partyRouter());

module.exports = app;
