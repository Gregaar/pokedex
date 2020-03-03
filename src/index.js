const config = require("config");
require("./db/mongoose")(process.env.mongoURL || config.get("mongo.url"));

require("./server");
