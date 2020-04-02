const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const SALT_WORK_FACTOR = 10;
const EMAIL_PATTERN = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/;

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: "Name is required"
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      match: [PASSWORD_PATTERN, "Invalid password pattern"]
    },
    email: {
      type: String,
      trim: true,
      match: [EMAIL_PATTERN, "Please fill a valid email address"],
      sparse: true,
      unique: false,
      default: null,
      lowercase: true
    },
    social: {
      slackID: String
    },
    city: String,
    avatar: { type: String, default: "/images/default-profile.jpg" },
    points: { type: Number, default: 0 },
    meetings: [{ type: Schema.Types.ObjectId, ref: "Meetings" }]
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.createdAt;
        delete ret.updatedAt;
        delete ret.__v;
        return ret;
      }
    }
  }
);

userSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt
    .genSalt(SALT_WORK_FACTOR)
    .then(salt => {
      bcrypt.hash(user.password, salt).then(hash => {
        user.password = hash;
        next();
      });
    })
    .catch(error => next(error));
});

const User = mongoose.model("User", userSchema);
module.exports = User;
