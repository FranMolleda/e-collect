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
    participants: [{ type: Schema.Types.ObjectId, ref: "User" }],
    date: {
      type: Date,
      default: new Date(),
    },
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

// meetingsSchema.virtual("date").get(function () {
//   const date = new Date(this.createdAt);
//   return (
//     date.toJSON(),
//     new Date(date.getTime() - date.getTimezoneOffset() * 60000).toJSON()
//   );
//   //date.toUTCString().replace(" GMT", "").toJSON(); en IMass
// });

const Meetings = mongoose.model("Meetings", meetingsSchema);
module.exports = Meetings;
