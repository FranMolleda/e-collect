require("dotenv").config();

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require("passport");
const cors = require("cors");

const dbUrl = process.env.DBURL;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });

const app_name = require("./package.json").name;
const debug = require("debug")(
  `${app_name}:${path.basename(__filename).split(".")[0]}`
);

const app = express();

const whitelist = ["http://localhost:3000", "http://localhost:1234"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

app.use(cors());
app.use(cors(corsOptions));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(cookieParser());

app.use(
  session({
    secret: "e-collect secret",
    resave: true,
    saveUninitialized: true,
    store: new MongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

require("./passport");
app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

app.use(express.static(path.join(__dirname, "public")));

const index = require("./routes/index");
app.use("/", index);

module.exports = app;
