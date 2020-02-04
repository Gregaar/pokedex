const mongoose = require("mongoose");

const connect = (url) =>
  mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

module.exports = connect;
