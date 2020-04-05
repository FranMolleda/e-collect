const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingsSchema = new Schema(
  {
    organizer: { type: Schema.Types.ObjectId, ref: "User" },

    streetAdress: String,
    city: String,
    country: String,
    postalCode: String,

    location: {
      latitude: Number,
      longitude: Number,
    },
    title: String,
    hour: String,
    description: String,
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

meetingsSchema.virtual("date").get(function () {
  const date = new Date(this.createdAt);
  return date.toUTCString().replace(" GMT", "").toJSON();
});

const Meetings = mongoose.model("Meetings", meetingsSchema);
module.exports = Meetings;
