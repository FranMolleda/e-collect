const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingsSchema = new Schema(
  {
    organizer: { type: Schema.Types.ObjectId, ref: "User" },

    streetAddress: { type: String },
    city: { type: String },
    country: { type: String },
    postalCode: { type: String },

    location: {
      latitude: Number,
      longitude: Number,
    },
    title: { type: String },
    hour: { type: String },
    description: { type: String },
    type: { type: String }, //Playas, rios, submarina, montes, montañas, rural, urbana
    difficulty: { type: String }, //baja, media, alta
    zone: { type: String },
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    date: { type: String },
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

const Meetings = mongoose.model("Meetings", meetingsSchema);
module.exports = Meetings;
