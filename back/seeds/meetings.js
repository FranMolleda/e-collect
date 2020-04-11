require("dotenv").config();
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Meetings = require("../models/meetings");

withDbConnection(async () => {
  await dropIfExists(Meetings);
  function frasedeldia() {
    frases = new Array(
      "Mi filosofía es hacer dinero, y si para ello tengo que perforar, eso es lo que voy a hacer",
      "El Plan de Energía Limpia es un intento ilegal de cerrar las centrales de carbón y con el tiempo otras fuentes de electricidad a partir de combustibles fósiles",
      "Haré recortes en la Agencia de Protección Ambiental (EPA) porque es ridícula, cada día sacan nuevas normas",
      "EEUU no debería malgastar dinero en el cambio climático",
      "El medio ambiente está bien, lo que no puedes destruir es el negocio"
    );

    let numero = Math.random();
    numero = numero * frases.length;
    numero = numero * 0.5;
    numero = Math.round(numero);
    return (frase = frases[numero]);
  }

  await Meetings.create([
    {
      streetAdress: "Paseo las Delicias, 43",
      city: "Madrid",
      country: "España",
      postalCode: "28oo5",
      title: "Limpiemos Matadero",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      streetAdress: "Pico Balaitus, 53",
      city: "Madrid",
      country: "España",
      postalCode: "28035",
      title: "Monte Límpio",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      streetAdress: "Roger de Flor, 5",
      city: "Quart de Poblet",
      country: "España",
      postalCode: "46903",
      title: "Paseo del Colesterol sin colillas",
      hour: "13:00",
      description: frasedeldia(),
    },
    {
      streetAdress: "Paseo Maritimo, 5",
      city: "Lanzarote",
      country: "España",
      postalCode: "35570",
      title: "Playa sin plásticos",
      hour: "06:30",
      description: frasedeldia(),
    },
    {
      streetAdress: "Paseo Catedral, 5",
      city: "Burgos",
      country: "España",
      postalCode: "09620",
      title: "San Juan del Monte sin Basuras",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      streetAdress: "Acho Pijo, 49",
      city: "Murcia",
      country: "España",
      postalCode: "30166",
      title: "Revivamos el Mar muerto",
      hour: "07:30",
      description: frasedeldia(),
    },
  ]);
});
