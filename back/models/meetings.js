const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingsSchema = new Schema(
  {
    organizer: { type: Schema.Types.ObjectId, ref: "User" },

    streetAdress: { type: String },
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
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

meetingsSchema.virtual("date").get(function () {
  const date = new Date(this.createdAt);
  return (
    date.toJSON(),
    new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON()
  );
  //date.toUTCString().replace(" GMT", "").toJSON(); en IMass
});

const Meetings = mongoose.model("Meetings", meetingsSchema);
module.exports = Meetings;
