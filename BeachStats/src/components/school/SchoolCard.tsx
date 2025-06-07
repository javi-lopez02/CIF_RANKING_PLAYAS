import { BiSolidGraduation, BiUserMinus } from "react-icons/bi";
import { School } from "../../types";

interface SchoolProps {
  school: School;
}

export default function SchoolCard({ school }: SchoolProps) {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-200">
      {/* Imagen y header */}
      <div className="relative">
        <div className="h-48 bg-gradient-to-br from-sky-500 to-sky-600 flex items-center justify-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
            <BiUserMinus className="w-10 h-10 text-sky-600" />
          </div>
        </div>
        {school.country && (
          <div className="absolute top-3 right-3 bg-white rounded-full px-3 py-1 text-xs font-medium text-gray-700 shadow-sm">
            {school.country}
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{school.name}</h3>

        {/* {school.title && (
          <p className="text-sky-600 font-medium mb-3">{school.title}</p>
        )}

        {school.school && (
          <div className="flex items-center text-gray-600 mb-3">
            <BiMapPin className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="text-sm">{school.school.name}</span>
          </div>
        )}

        {school.specialties && school.specialties.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">Especialidades:</h4>
            <div className="flex flex-wrap gap-2">
              {school.specialties.map((specialty, index) => (
                <span 
                  key={index}
                  className="bg-sky-50 text-sky-700 text-xs px-2 py-1 rounded-full border border-sky-200"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        )}

        {school.experience && (
          <div className="text-gray-600 text-sm mb-4">
            <span className="font-medium">Experiencia:</span> {school.experience} años
          </div>
        )}

        {school.bio && (
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
            {school.bio}
          </p>
        )} */}

        {/* Footer con acciones */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <BiSolidGraduation className="w-3 h-3 mr-1" />
              <span>Evaluador EIEP</span>
            </div>
            {/* <button className="text-sky-600 text-sm font-medium hover:text-sky-700 transition-colors">
              Ver perfil →
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}
