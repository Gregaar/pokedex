const config = require("config");
require("./db/mongoose")(process.env.MONGODB_URI || config.get("mongo.url"));

require("./server");
