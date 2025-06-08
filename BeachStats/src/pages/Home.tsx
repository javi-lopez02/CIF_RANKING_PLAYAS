import { useNavigate } from "react-router-dom";
import BestBeachesCard from "../components/home/BestBeachesCard";
import ExpertCarrusel from "../components/home/ExpertCarrusel";
import HowToBeExpert from "../components/home/How_ToBe_Expert";
import MediaCoverage from "../components/home/MediaCoverage";
import RankingReport from "../components/home/RankingReport";
import BeMap from "../components/home/BeMaps";
import SidebarAds from "../components/home/BannerLateral";

export const beachType = [
  {
    id: 1,
    link: "/urban",
    title: "Mejores Playas Urbanas",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Jurere-Marcus-Polette.jpg",
  },
  {
    id: 2,
    link: "/poblado",
    title: "Mejores Playas de Poblado",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/00-Ranking2025-COL_SMR_PlayaBlanca01-Camilo-M.-Botero.jpg",
  },
  {
    id: 3,
    link: "/rural",
    title: "Mejores Playas Rurales",
    image:
      "https://files.lafm.com.co/assets/public/styles/img_node_706x392/public/2024-11/playa.jpg.webp?VersionId=3LJayzAEQcpzVLtUyG6DGDwadyXxyOrC&itok=dRipianA",
  },
  {
    id: 4,
    link: "/natural",
    title: "Mejores Playas Naturales",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Praia_Mocambique_Brasil_Fabricio_Martinez.jpg",
  },
  {
    id: 5,
    link: "#",
    title: "Ranking Mejores Playas",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/ranking_mejores_playas.png",
  },
  {
    id: 6,
    link: "/enclave",
    title: "Mejores Playas Enclave",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/Playa-enclave.jpg",
  },
];

export const beachZone = [
  {
    id: 1,
    link: "/atlantic-south",
    title: "Mejores Playas Atlantico Sur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4MRb3HnKgp4WNFVME1O9Jx94VWsrPtfKzsQ&s",
  },
  {
    id: 2,
    link: "/atlantic-north",
    title: "Mejores Playas Atlantico Norte",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIkcnyKltHlzURpyV4fJcYFhY-vCPyqLDvQQ&s",
  },
  {
    id: 3,
    link: "/pacific-south",
    title: "Mejores Playas Pacifico Sur",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7RhCipHj87axtfyBgStvA03Pfl2a_19TmjA&s",
  },
  {
    id: 4,
    link: "/pacific-north",
    title: "Mejores Playas Pacifico Norte",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTx4LGe9MRjoZpAMXT7zpd1EUtJ1-txOOlYzA&s",
  },
  // {
  //   id: 5,
  //   link: "/mediterraneo",
  //   title: "Mejores Playas Mediterraneo",
  //   image:
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3xHmW-3Wp9Vd6Guo_hQPIdcmlIrKwWKMPcQ&s",
  // },
  {
    id: 5,
    link: "#",
    title: "CIF Playas",
    image:
      "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/cifplayas.png",
  },
  {
    id: 6,
    link: "/caribean",
    title: "Mejores Playas Caribe",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgaQnvbiAIv9Ziw5cHO8_rCKGoAwWAwC-OZg&s",
  },
];

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="w-full md:w-4/5 flex flex-col items-center">
        <div className="flex flex-col p-4 gap-8">
          <h2 className="py-4 text-center font-sunbone font-bold text-lg">
            MEJORES PLAYAS
          </h2>

          {/* Tipos de playa */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 content-center">
            {beachType.map((type) => (
              <BestBeachesCard
                key={type.id}
                title={type.title}
                image={type.image}
                onClick={() => handleClick(type.link)}
              />
            ))}
          </div>

          {/* Zonas de playa */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {beachZone.map((zone) => (
              <BestBeachesCard
                key={zone.id}
                title={zone.title}
                image={zone.image}
                onClick={() => handleClick(zone.link)}
              />
            ))}
          </div>
        </div>
        <div className="px-8 flex flex-col gap-8 w-full">
          <BeMap></BeMap>
          <MediaCoverage />
          <RankingReport />
          <ExpertCarrusel />
        </div>
        <HowToBeExpert />
      </div>

      {/* Sección de Google Anuncios */}
      <div className="hidden w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 md:flex items-center justify-center">
        <SidebarAds></SidebarAds>
      </div>
    </div>
  );
}
