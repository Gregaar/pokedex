const config = require("config");
require("./db/mongoose")(config.get("mongo.url"));

require("./server");
