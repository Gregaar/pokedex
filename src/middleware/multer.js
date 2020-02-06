const multer = require("multer");

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.JPG$/)) {
      return cb(new Error("Please upload a JPG file."));
    }
    cb(undefined, true);
  },
});

module.exports = upload;
