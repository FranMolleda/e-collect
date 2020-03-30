const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingsSchema = new Schema(
  {
    organizer: { type: Schema.Types.ObjectId, ref: "User" },
    address: {
      streetAddress: String,
      city: String,
      country: String,
      postalCode: String
    },
    location: {
      latitude: Number,
      longitude: Number
    },
    hour: String,
    description: String,
    participants: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true
  }
);

reviewSchema.virtual("date").get(function() {
  const date = new Date(this.createdAt);
  return date.toUTCString().replace(" GMT", "");
});

const Meetings = mongoose.model("Meetings", meetingsSchema);
module.exports = Meetings;
