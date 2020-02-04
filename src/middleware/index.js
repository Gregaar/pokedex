const { logger, requestLogger } = require("../logger");
const bodyParser = require("body-parser");
const helmet = require("helmet");

module.exports = () => {
  logger.info("Registering common middleware...");

  return [helmet(), bodyParser.json(), requestLogger];
};
