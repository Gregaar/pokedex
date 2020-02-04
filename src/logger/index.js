const createLogger = require("pino");
const createRequestLogger = require("express-pino-logger");

const logger = createLogger();

module.exports.logger = logger;
module.exports.requestLogger = createRequestLogger({ logger });
