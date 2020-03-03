const config = require("config");
require("./db/mongoose")(process.env.mongo.url || config.get("mongo.url"));

require("./server");
