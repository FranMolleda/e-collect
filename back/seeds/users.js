require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");

const createUsers = async (users) => {
  for (user of users) {
    try {
      await mongoose.connect(process.env.DBURL, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true,
      });
      const existUser = await User.findOne({ username: user.name });
      if (!existUser) {
        const newUser = {
          username: user.name,
          password: "cm1bq10G",
          image: user.image,
          email: user.email,
          city: user.city,
        };
        await User.create(newUser);
        console.log(`User ${user.name} created`);
      } else {
        console.log(`User ${user.name} already exists`);
      }
    } catch (error) {
      console.log(error);
    } finally {
      await mongoose.disconnect();
    }
  }
};

createUsers([
  {
    name: "Manuela",
    email: "manuela@gmail.com",
    city: "Valencia",
  },
  {
    name: "Julito",
    email: "Julio@gmail.com",
    city: "Bilbao",
  },
  {
    name: "Manolo",
    email: "ma@gmail.com",
    city: "Madrid",
  },
  {
    name: "Majo",
    email: "mj23@gmail.com",
    city: "Valencia",
  },
  {
    name: "Alejandro",
    email: "alex@yahoo.com",
    city: "Valencia",
  },
  {
    name: "Lola",
    email: "dolores@gmail.com",
    city: "Granada",
  },
  {
    name: "Bernardo",
    email: "berni@gmail.com",
    city: "El Vellon",
  },
  {
    name: "Padilla",
    email: "padi@gmail.com",
    city: "Madrid",
  },
  {
    name: "Valores",
    email: "paeque@terra.com",
    city: "Algete",
  },
]);
