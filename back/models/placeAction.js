const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const placeActionSchema = new Schema(
  {
    organizer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: "Organizer is required",
    },
    zone: { type: String },
    cityPlace: { type: String },
    countryPlace: { type: String },

    locationPlace: {
      latitude: Number,
      longitude: Number,
    },
  },
  {
    timestamps: true,
  }
);

const PlaceAction = mongoose.model("PlacesAction", placeActionSchema);
module.exports = PlaceAction;
