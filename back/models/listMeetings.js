const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listMeetingsSchema = new Schema(
  {
    List: [{ type: Schema.Types.ObjectId, ref: "Meetings" }],
  },
  {
    timestamps: true,
  }
);

const ListMeetings = mongoose.model("Meetings", listMeetingsSchema);
module.exports = ListMeetings;
