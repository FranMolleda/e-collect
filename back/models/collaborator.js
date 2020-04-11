const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const collaboratorSchema = new Schema(
  {
    company: { type: String },
    city: { type: String },
    country: { type: String },
    activity: { type: String },

    location: {
      latitude: Number,
      longitude: Number,
    },
    reward: { type: String }, //Descuento o premio
  },
  {
    timestamps: true,
  }
);

const Collaborator = mongoose.model("Collaborator", collaboratorSchema);
module.exports = Collaborator;
