require("dotenv").config();
const { withDbConnection, dropIfExists } = require("../withDbConnection");
const Meetings = require("../models/meetings");

withDbConnection(async () => {
  await dropIfExists(Meetings);
  function frasedeldia() {
    frases = new Array(
      "Nunc fringilla ullamcorper lorem luctus porttitor. Aliquam accumsan euismod odio, a lacinia magna mattis ut. Praesent ac leo ipsum. Nulla ac ullamcorper dui, in volutpat libero. Donec blandit, nisi quis mollis feugiat, tellus sapien posuere dui, non accumsan lectus nulla id urna. In ut dapibus elit. Proin interdum placerat lorem, vel sagittis risus blandit in.",
      "Curabitur et mauris urna. Nunc ultrices nisi mollis nunc laoreet tristique. Phasellus molestie consequat sem, vel lacinia magna ultrices vel. Pellentesque velit tortor, commodo sit amet ullamcorper quis, gravida non libero.",
      "Nulla ut odio ac neque viverra interdum. Mauris tellus ante, varius quis auctor quis, eleifend ac dui. Etiam id quam odio. Mauris sagittis, sem at euismod maximus, metus orci vehicula metus, nec euismod ligula lacus vitae libero. Nunc quis condimentum lacus.",
      "El Plan de Energía Limpia es un intento ilegal de cerrar las centrales de carbón y con el tiempo otras fuentes de electricidad a partir de combustibles fósiles",
      "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec diam quam, feugiat sit amet leo at, feugiat porttitor lacus. In non nisi quam. ",
      "Duis vel nunc ipsum. Fusce ut purus vel enim rutrum ornare. Phasellus egestas pellentesque metus ac ultricies. In malesuada quis odio quis faucibus. Proin suscipit lacus a libero faucibus, vitae rhoncus risus sollicitudin.",
      "Proin in consectetur ex, eu posuere urna. Aenean sit amet ipsum fringilla, imperdiet magna nec, iaculis enim. Vivamus mattis fringilla lorem, ac hendrerit erat molestie sit amet. Curabitur dictum massa a leo egestas posuere. Vestibulum tincidunt dictum dapibus. Aenean mattis dapibus libero et fermentum",
      "Fusce condimentum malesuada neque, viverra mollis massa bibendum sit amet. Proin ac porta nunc, ac tempus ex. Pellentesque ut placerat augue.",
      "Nulla auctor eros vel turpis sodales hendrerit. Maecenas iaculis leo a ipsum interdum accumsan. Nullam et sem imperdiet, feugiat massa et, laoreet tellus.",
      "Phasellus dignissim mattis pretium. Sed faucibus dui ac felis mattis, vel volutpat lectus imperdiet. Aenean feugiat odio quis euismod dapibus. Nam lacinia ut urna sit amet feugiat. Vivamus egestas hendrerit dignissim. ",
      "Ut euismod quam eu nisi vestibulum, eu suscipit orci posuere. Morbi lacus tellus, tempus vitae interdum sed, tristique id metus."
    );

    let numero = Math.random();
    numero = numero * frases.length;
    numero = numero * 0.5;
    numero = Math.round(numero);
    return (frase = frases[numero]);
  }

  await Meetings.create([
    {
      organizer: "5e96aaa995697a0a8d187720",
      zone: "Matadero (Arganzuela)",
      difficulty: "Baja",
      type: "Urbana",
      date: "26/04/2020",
      streetAdress: "Paseo las Delicias, 43",
      city: "Madrid",
      country: "España",
      postalCode: "28oo5",
      title: "Limpiemos Matadero",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      organizer: "5e96aaa995697a0a8d187721",
      zone: "Pamplona",
      difficulty: "Alta",
      type: "Montaña",
      date: "02/06/2020",
      streetAdress: "Pico Balaitus, 53",
      city: "Madrid",
      country: "España",
      postalCode: "28035",
      title: "Monte Limpio",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      organizer: "5e96aaa995697a0a8d187722",
      zone: "Barrio del Cristo",
      difficulty: "Baja",
      type: "Urbana",
      date: "02/09/2020",
      streetAdress: "Roger de Flor, 5",
      city: "Quart de Poblet",
      country: "España",
      postalCode: "46903",
      title: "Paseo del Colesterol sin colillas",
      hour: "13:00",
      description: frasedeldia(),
    },
    {
      organizer: "5e96aaa995697a0a8d187723",
      zone: "Playa Quemada",
      difficulty: "Baja",
      type: "Playa",
      date: "06/05/2020",
      streetAdress: "Paseo Maritimo, 5",
      city: "Lanzarote",
      country: "España",
      postalCode: "35570",
      title: "Playa sin plásticos",
      hour: "06:30",
      description: frasedeldia(),
    },
    {
      organizer: "5e96aaa995697a0a8d187724",
      zone: "San Juan del Monte",
      difficulty: "Media",
      type: "Monte",
      date: "15/05/2020",
      streetAdress: "Paseo Catedral, 5",
      city: "Burgos",
      country: "España",
      postalCode: "09620",
      title: "San Juan del Monte sin Basuras",
      hour: "08:30",
      description: frasedeldia(),
    },
    {
      organizer: "5e96aaa995697a0a8d187725",
      zone: "La Manga del Mar Menor",
      difficulty: "Baja",
      type: "Playa",
      date: "15/08/2020",
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
