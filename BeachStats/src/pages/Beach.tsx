import TopBeaches from "../components/beach/TopBeaches";
import SidebarAds from "../components/home/BannerLateral";
import HowToBeExpert from "../components/home/How_ToBe_Expert";

export default function Beach() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      <div className="w-full md:w-4/5 flex flex-col">
        <div className="flex flex-col w-full gap-4 lg:gap-8 py-4">
          <h1 className="py-4 text-center font-sans font-bold text-dark-700 text-5xl">
            Explora las Playas del Mundo
          </h1>
          {/* Sección izquierda con galería */}
          <TopBeaches></TopBeaches>
        </div>
        <HowToBeExpert></HowToBeExpert>
      </div>

      {/* Sección de Google Anuncios */}
      <div className="hidden w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 md:flex items-center justify-center">
        <SidebarAds></SidebarAds>
      </div>
    </div>
  );
}
