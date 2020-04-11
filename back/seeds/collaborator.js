require("dotenv").config();
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Collaborator = require("../models/collaborator");

withDbConnection(async () => {
  await dropIfExists(Collaborator);
  await Collaborator.create([
    {
      company: "La Fábrica de Hielo",
      city: "Valencia",
      countryPlace: "España",
      activity: "Pub",
      reward: "15% Off",
    },
    {
      company: "Hironhack Madrid",
      city: "Madrid",
      countryPlace: "España",
      activity: "Academy",
      reward: "100% Off",
    },
    {
      company: "La Primera",
      city: "Madrid",
      countryPlace: "España",
      activity: "Restaurant",
      reward: "20% Off",
    },
    {
      company: "El Kubo Loco",
      city: "Madrid",
      countryPlace: "España",
      activity: "Pub",
      reward: "25% Off",
    },
    {
      company: "Veggie Room",
      city: "Madrid",
      countryPlace: "España",
      activity: "Veggan Food Shop",
      reward: "15% Off",
    },
  ]);
});
