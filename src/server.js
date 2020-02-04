const config = require("config");
const app = require("./app");
const { logger } = require("./logger");

const server = app.listen(config.get("app.port"), () => {
  logger.info(`Application running on port ${config.get("app.port")}`);
});

module.exports = server;
