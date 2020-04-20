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
      latitude: { type: Number },
      longitude: { type: Number },
    },
    type: { type: String }, //Playas, rios, submarina, montes, montañas, rural, urbana
    difficulty: { type: String }, //baja, media, alta
    date: { type: Date, default: new Date() },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      },
    },
  }
);

const PlaceAction = mongoose.model("PlacesAction", placeActionSchema);
module.exports = PlaceAction;
