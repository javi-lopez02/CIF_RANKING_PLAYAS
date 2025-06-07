import React from "react";
import TeamCard from "../components/teamDirectory/TeamCard";
import TeamInfo from "../components/teamDirectory/TeamInfo";
import useScientific from "../customHooks/useScientifics";
// Componente principal
const ProfessorsComponent: React.FC = () => {
  const {scientific, loading} = useScientific();

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
      <div className="w-full md:w-4/5 flex flex-col px-6 sm:px-4 md:px-6">
        <div className="flex flex-col w-full gap-4 lg:gap-8 py-4">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 py-10">
            {scientific.map((professor) => (
              <TeamCard
                key={professor.id}
                professor={professor}
              />
            ))}
          </div>
        )}
      </div>
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
};

export default ProfessorsComponent;
