const config = require("config");
const app = require("./app");
const imgurController = require("./controllers/imgur-cards");
const { logger } = require("./logger");

const PORT = process.env.PORT || config.get("app.port");

const server = app.listen(PORT, async () => {
  logger.info(`Application running on port ${config.get("app.port")}`);
  await imgurController.savePokemonImgurIds();
  await imgurController.savePersonalImgurIds();
});

module.exports = server;
