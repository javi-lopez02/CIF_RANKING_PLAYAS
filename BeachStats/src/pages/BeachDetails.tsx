import { BeachInfo } from "../components/beachdetails/BeachInfo";
import { BiMapPin, BiPencil } from "react-icons/bi";
import { BeachPicture } from "../components/beachdetails/BeachPicture";
import BeachDescription from "../components/beachdetails/BeachDescription";
import HowToBeExpert from "../components/home/How_ToBe_Expert";
import BeachEvaluation from "../components/beachdetails/BeachEvaluation";

export default function BeachDetails() {
  const beachData = {
    name: "Playa Varadero Hotel Internacional ",
    location: {
      city: "Matanzas",
      country: "Cuba",
      region: "Caribe",
      coordinates: `23°9'37.13" N 81°14'28.81" W`,
    },
    type: "Urbana",
    evaluators: "Frank Huerta López",
    images: [
      "https://media2021.meliacuba.com/photos/destinations/varadero-beach-2812.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ztzlrrzPt_F8GaO6s8MBHy5tmLeQYTPMpw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaKhSOmeAnnvdEzfeI3-gYM6P6DupWnz-wQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPFKpUC54LSeCJOdLFJKEclAM1Ra8_r90OQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsk0f7WK7wK8RNgUr9U8msTlvXg6eeEUsDw&s",
      "https://media2021.meliacuba.com/photos/destinations/varadero-beach-2812.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ztzlrrzPt_F8GaO6s8MBHy5tmLeQYTPMpw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTaKhSOmeAnnvdEzfeI3-gYM6P6DupWnz-wQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUPFKpUC54LSeCJOdLFJKEclAM1Ra8_r90OQ&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsk0f7WK7wK8RNgUr9U8msTlvXg6eeEUsDw&s",
    ],
    description:
      "La Playa Varadero Hotel Internacional es una joya turística con una extensión de más de 300 metros y un ancho de más de 50 metros. Su arena fina y blanca se mezcla con aguas azules y cristalinas, ofreciendo un entorno paradisíaco. El Hotel Meliá Internacional colinda con esta área, con un área de sol de 22,500 metros cuadrados y espacios ambientalmente ejemplares. La playa se distingue por su oferta restaurada, adornada con vegetación autóctona y preservación de la fauna local. Todas las infraestructuras respetan el entorno y se realizan servicios de limpieza diarios para mantener su belleza. Reconocida en el Ranking 2024, esta playa ofrece una experiencia única, donde la comodidad y la sostenibilidad se funden en armonía.",
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      <div className="w-full md:w-4/5 flex flex-col px-2 sm:px-4 md:px-6">
        <div className="flex flex-col lg:flex-row w-full gap-4 lg:gap-8 py-4">
          {/* Sección izquierda con galería */}
          <div className="flex flex-col w-full lg:w-3/5 gap-6">
            <BeachPicture images={beachData.images} />
            <BeachDescription
              description={beachData.description}
              icon={BiPencil}
            ></BeachDescription>
          </div>

          {/* Sección derecha con ubicación */}
          <div className="w-full lg:w-2/5 mt-4 lg:mt-0 flex flex-col gap-6">
            <BeachInfo
              location={beachData.location}
              type={beachData.type}
              evaluators={beachData.evaluators}
              icon={BiMapPin}
            />
            <BeachEvaluation></BeachEvaluation>
          </div>
        </div>
        <HowToBeExpert></HowToBeExpert>
      </div>

      {/* Sección de Google Anuncios */}
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
}
