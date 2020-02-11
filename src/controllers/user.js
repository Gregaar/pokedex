const { logger } = require("../logger");
const User = require("../models/user");

const signUp = async (req, res) => {
  if (await User.findOne({ email: req.body.email })) {
    res.status(400).send("Email already in use");
  } else {
    const user = new User(req.body);
    try {
      await user.save();
      const token = await user.generateAuthToken();
      res.status(201).send({ user, token });
    } catch (error) {
      res.status(400).send(error);
      logger.info(error);
    }
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user, token });
  } catch (error) {
    res.status(400).send("Unable to login");
  }
};

const logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token !== req.token;
    });
    await req.user.save();

    res.send();
  } catch (error) {
    res.status(500).send();
  }
};

module.exports = {
  signUp,
  login,
  logout,
};
