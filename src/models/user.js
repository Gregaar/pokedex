const config = require("config");
const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      validator(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Email is invalid.");
        }
      },
    },
    password: {
      type: String,
      minLength: 6,
      maxLength: 16,
      trim: true,
      required: true,
      validator(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("Password cannot contain the word 'password'");
        }
      },
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

// Instance Methods

// Deletes sensitive data being returned to the user.
userSchema.methods.toJSON = function() {
  const user = this;
  const userObject = user.toObject();

  delete userObject.password;
  delete userObject.tokens;

  return userObject;
};

// Creates the auth token for the user.
userSchema.methods.generateAuthToken = async function() {
  const user = this;
  const token = jwt.sign(
    {
      _id: user._id.toString(),
    },
    config.get("JWT_SECRET.signature"),
  );

  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

//Statics

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Unable to login.");
  }
  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Unable to login.");
  }
  return user;
};

//Pre methods

// Hashes user passwords
userSchema.pre("save", async function(next) {
  const user = this;

  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model("User", userSchema);

module.exports = User;
