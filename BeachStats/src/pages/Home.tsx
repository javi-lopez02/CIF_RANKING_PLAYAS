import BestBeachesCard from "../components/home/BestBeachesCard";
import ExpertCarrusel from "../components/home/ExpertCarrusel";
import HowToBeExpert from "../components/home/How_ToBe_Expert";

export const beachType = [
  { id: 1, title: "Mejores playas urbanas", image: "/api/placeholder/400/300" },
  {
    id: 2,
    title: "Mejores playas de pueblo",
    image: "/api/placeholder/400/300",
  },
  { id: 3, title: "Mejores playas rurales", image: "/api/placeholder/400/300" },
  {
    id: 4,
    title: "Mejores playas naturales",
    image: "/api/placeholder/400/300",
  },
];

export const beachZone = [
    { id: 1, title: "Mejores playas urbanas", image: "/api/placeholder/400/300" },
    {
      id: 2,
      title: "Mejores playas de pueblo",
      image: "/api/placeholder/400/300",
    },
    { id: 3, title: "Mejores playas rurales", image: "/api/placeholder/400/300" },
    {
      id: 4,
      title: "Mejores playas naturales",
      image: "/api/placeholder/400/300",
    },
  ];

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/4 px-4 flex flex-col items-center">
        <div className="p-4">
        <h2 className="py-4 text-center font-semibold text-lg mb-6">MEJORES PLAYAS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {beachType.map((category) => (
              <BestBeachesCard
                key={category.id}
                title={category.title}
                image={category.image}
                onClick={() => console.log(`Navigating to ${category.title}`)}
              />
            ))}
          </div>
        </div>

        <ExpertCarrusel></ExpertCarrusel>

        <HowToBeExpert></HowToBeExpert>
      </div>

      {/* Sección de Google Anuncios */}
      <div className="w-1/4 mx-4 border-2 border-black rounded-lg shadow-lg bg-white">
        {" "}
        Este es el sitio donde van los anuncios de google
      </div>
    </div>
  );
}
