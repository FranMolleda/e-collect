require("dotenv").config();
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Collaborator = require("../models/collaborator");

withDbConnection(async () => {
  await dropIfExists(Collaborator);
  await Collaborator.create([
    {
      company: "La Fábrica de Hielo",
      city: "Valencia",
      country: "España",
      activity: "Pub",
      reward: "15% Off",
    },
    {
      company: "Ironhack Madrid",
      city: "Madrid",
      country: "España",
      activity: "Academy",
      reward: "100% Off",
    },
    {
      company: "La Primera",
      city: "Madrid",
      country: "España",
      activity: "Restaurant",
      reward: "20% Off",
    },
    {
      company: "El Kubo Loco",
      city: "Madrid",
      country: "España",
      activity: "Pub",
      reward: "25% Off",
    },
    {
      company: "Veggie Room",
      city: "Madrid",
      country: "España",
      activity: "Veggan Food Shop",
      reward: "15% Off",
    },
  ]);
});
