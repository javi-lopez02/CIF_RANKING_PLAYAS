import { Scientifics } from "../../types";

interface ProfessorCardProps {
  professor: Scientifics;
}

const TeamCard: React.FC<ProfessorCardProps> = ({ professor }) => {
  return (
    <div className="group cursor-pointer transform transition-all duration-300 hover:scale-105">
      {/* Imagen circular con gradiente */}
      <div className="relative mb-6">
        <img
          src={professor.image}
          alt={professor.name}
          className="w-full h-full rounded-full object-cove shadow-lg"
        />
      </div>

      {/* Información del profesor */}
      <div className="text-center px-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4 capitalize tracking-wide">
          {professor.name}
        </h3>
        <div className="space-y-2">
          <p className="text-sky-600 font-sans leading-relaxed">
            {professor.schoolLevel}: {professor.areaExperiencia}
          </p>
          <p>
            {professor.country}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
