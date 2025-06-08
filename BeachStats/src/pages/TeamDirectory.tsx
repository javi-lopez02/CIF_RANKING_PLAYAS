import React from "react";
import TeamCard from "../components/teamDirectory/TeamCard";
import TeamInfo from "../components/teamDirectory/TeamInfo";
import useScientific from "../customHooks/useScientifics";
import SidebarAds from "../components/home/BannerLateral";
import How_ToBe_Expert from "../components/home/How_ToBe_Expert";
// Componente principal
const ProfessorsComponent: React.FC = () => {
  const { scientific, loading } = useScientific();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      <div className="w-full md:w-4/5 flex flex-col">
        <div className="flex flex-col w-full gap-4 lg:gap-8 py-4 p-6">
          <TeamInfo></TeamInfo>
        </div>

        {/* Grid de profesores */}

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="text-center animate-pulse">
                <div className="w-64 h-64 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mb-6"></div>
                <div className="space-y-3">
                  <div className="h-6 bg-gray-200 rounded mx-auto w-48"></div>
                  <div className="h-4 bg-gray-200 rounded mx-auto w-56"></div>
                  <div className="h-4 bg-gray-200 rounded mx-auto w-52"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {!loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 p-6">
            {scientific.map((professor) => (
              <TeamCard key={professor.id} professor={professor} />
            ))}
          </div>
        )}

        <How_ToBe_Expert></How_ToBe_Expert>
      </div>

      <div className="hidden w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 md:flex items-center justify-center">
        <SidebarAds></SidebarAds>
      </div>
    </div>
  );
};

export default ProfessorsComponent;
