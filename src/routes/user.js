const { Router } = require("express");
const { logger } = require("../logger");
const auth = require("../middleware/auth");
const userController = require("../controllers/user");

const router = new Router();

router.post("/signup/newuser", userController.signUp);

router.post("/login/auth", userController.login);

router.post("/logout", auth, userController.logout);

module.exports = () => {
  logger.info("Registering 'user' routes...");

  return router;
};
