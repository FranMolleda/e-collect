require("dotenv").config();
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Places = require("../models/placeAction");

withDbConnection(async () => {
  await dropIfExists(Places);
  await Places.create([
    {
      organizer: "5e91f5966eb5d1ab5438ac3b",
      zone: "Matadero",
      cityPlace: "Madrid",
      countryPlace: "España",
      type: "Urbana",
      difficulty: "Baja",
    },
    {
      organizer: "5e91f5976eb5d1ab5438ac40",
      zone: "Malvarrosa",
      cityPlace: "Valencia",
      countryPlace: "España",
      type: "Playas",
      difficulty: "Baja",
    },
    {
      organizer: "5e91f5976eb5d1ab5438ac3f",
      zone: "Cala Papagayo",
      cityPlace: "Lanzarote",
      countryPlace: "España",
      type: "Playas",
      difficulty: "Media",
    },
    {
      organizer: "5e91f5976eb5d1ab5438ac40",
      zone: "Monte Cantabria",
      cityPlace: "Logroño",
      countryPlace: "España",
      type: "Monte",
      difficulty: "Media",
    },
    {
      organizer: "5e91f5976eb5d1ab5438ac41",
      zone: "Muellito",
      cityPlace: "El Hierro",
      countryPlace: "España",
      type: "Submarina",
      difficulty: "Alta",
    },
  ]);
});
