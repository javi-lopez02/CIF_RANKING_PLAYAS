import { BiInfoCircle } from "react-icons/bi";

export default function Best10Beaches() {
  // Datos de las 10 mejores playas según la ciencia
  const beaches = [
    {
      id: 1,
      rank: 1,
      name: "Meliá Antillas",
      location: "Varadero, CUBA",
      score: 89,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7efC2ezqswTymCnTpH9xMiYeFX66HDmDXdg&s",
      metrics: {
        ecosistema: 85,
        limpieza: 95,
        seguridad: 88,
        infraestructura: 90,
      },
    },
    {
      id: 2,
      rank: 2,
      name: "Ipanema",
      location: "Río de Janeiro, BRASIL",
      score: 87,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyP8qw40gyjODm8KABWYKyvoc1JrcEnKxqJw&s",
      metrics: {
        ecosistema: 80,
        limpieza: 85,
        seguridad: 90,
        infraestructura: 92,
      },
    },
    {
      id: 3,
      rank: 3,
      name: "Histórico",
      location: "Varadero, CUBA",
      score: 86,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzMmMXHq066RciOgMHfX3dOwvTO8NS3ocYA&s",
      metrics: {
        ecosistema: 82,
        limpieza: 88,
        seguridad: 85,
        infraestructura: 89,
      },
    },
    {
      id: 4,
      rank: 4,
      name: "Internacional",
      location: "Varadero, CUBA",
      score: 85,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmFxhIXNxE3v_Z51Bi_PfGB_Rop4-8ORf7g&s",
      metrics: {
        ecosistema: 80,
        limpieza: 90,
        seguridad: 84,
        infraestructura: 86,
      },
    },
    {
      id: 5,
      rank: 5,
      name: "Porto Sauípe",
      location: "Salvador, BRASIL",
      score: 84,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcVsf5VbhNr21YMMpFZ1PMad0ETseYONXZw&s",
      metrics: {
        ecosistema: 90,
        limpieza: 82,
        seguridad: 78,
        infraestructura: 84,
      },
    },
    {
      id: 6,
      rank: 6,
      name: "Gramacho",
      location: "Río de Janeiro, BRASIL",
      score: 83,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV7Sa3ZPEjzkSlfVuEmSygAz4rXMzu9fqCXQ&s",
      metrics: {
        ecosistema: 88,
        limpieza: 80,
        seguridad: 82,
        infraestructura: 79,
      },
    },
    {
      id: 7,
      rank: 7,
      name: "La Estrella",
      location: "Cayo Santa María, CUBA",
      score: 82,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfX6hJqX4QDJew1mGvHv3ybdN6oFvYJGgQw&s",
      metrics: {
        ecosistema: 85,
        limpieza: 80,
        seguridad: 79,
        infraestructura: 83,
      },
    },
    {
      id: 8,
      rank: 8,
      name: "Perla Blanca",
      location: "Cayo Santa María, CUBA",
      score: 81,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjb_DTSMnS_c5abMJmm8jCBQgKLXv7UBtMg&s",
      metrics: {
        ecosistema: 86,
        limpieza: 83,
        seguridad: 75,
        infraestructura: 80,
      },
    },
    {
      id: 9,
      rank: 9,
      name: "Praia do Forte",
      location: "Búzios, BRASIL",
      score: 80,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRssxyn2G_ppJ1_7nFREXXz9HXPRrjgIv2bHw&s",
      metrics: {
        ecosistema: 79,
        limpieza: 81,
        seguridad: 78,
        infraestructura: 82,
      },
    },
    {
      id: 10,
      rank: 10,
      name: "Praia Azeda",
      location: "Búzios, BRASIL",
      score: 79,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvhcqrG4HUDvn_TUGyaW1jq_99Es6R8MyzHQ&s",
      metrics: {
        ecosistema: 84,
        limpieza: 78,
        seguridad: 76,
        infraestructura: 77,
      },
    },
  ];

  // Renderizado principal
  return (
    <>
      <div className="max-w-6xl mx-auto p-4">
        {/* Título y descripción */}
        <div className="flex justify-between mb-12 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold border-b-2 border-dark font-sans text-dark mb-2">
              LAS 10 MEJORES PLAYAS
            </h1>
            <h2 className="text-xl md:text-2xl font-medium font-sans text-dark mb-4">
              SEGÚN LA CIENCIA
            </h2>
            <p className="text-gray-600 font-sans text-sm md:text-base max-w-3xl mx-auto">
              Un equipo de 46 expertos en gestión de playas evaluó 123 playas
              utilizando indicadores de ecosistemas. Vea cuáles son las mejores
              entre las playas analizadas.
            </p>
          </div>

          {/* Logo/Emblema */}
          <img
            src="/Ranking_logo.png"
            alt=""
            className="w-32 h-32 lg:w-48 lg:h-48"
          />
        </div>

        {/* Grilla de playas */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {beaches.map((beach) => (
            <div
              key={beach.id}
              className="relative bg-white rounded-lg border-1 shadow-md overflow-hidden border-dark hover:shadow-lg transition-shadow"
            >
              <div className="relative h-40">
                <img
                  src={beach.image}
                  alt={beach.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 bg-gold text-dark font-bold rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                  {beach.rank}
                </div>
              </div>

              <div className="p-3">
                <h3 className="font-bold text-center text-lg font-sans mb-1 text-dark">
                  {beach.name}
                </h3>
                <p className="text-gray-600 text-sm font-lato text-center mb-3">
                  {beach.location}
                </p>

                <div className="flex justify-center mb-3">
                  <div className="bg-blue-100 text-blue-800 font-medium font-sans px-2.5 py-0.5 rounded text-sm inline-flex items-center">
                    <span>{beach.score}/100</span>
                  </div>
                </div>

                <button className="w-full  mt-2 text-dark hover:text-gold flex items-center justify-center py-1 px-2 rounded hover:bg-blue-50 transition-colors">
                  <BiInfoCircle size={16} className="mr-1" />
                  <span className="text-sm">Ver detalles</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
