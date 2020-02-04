const mongoose = require("mongoose");

const partySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      default: "My dream Pokemon party"
    },
    pokemon: {
      type: Array
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId
    }
  },
  {
    timestamps: true
  }
);

const Party = mongoose.model('Party', partySchema);

module.exports = Party;
