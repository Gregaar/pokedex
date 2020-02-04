const express = require("express");
require("./db/mongoose");

const partyRouter = require('./routers/party');

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(partyRouter);


app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
