import { useState } from "react";
import { Expert } from "../../types";

interface ExpertProps {
  evaluator: Expert;
}

export default function EvaluatorCard({ evaluator }: ExpertProps) {
  const [isHovering, setIsHovering] = useState(false);

  // Función para generar texto en prosa
  const generateProseDescription = () => {
    return `Conoce a ${evaluator.name}, evaluador que reside en ${evaluator.country}, 
     ademas es afiliado a la institucion ${evaluator.institution}.`;
  };

  return (
    <div className="flex flex-col items-center">
      {/* Contenedor de la imagen con hover */}
      <div
        className="relative w-64 h-64 rounded-lg overflow-hidden cursor-pointer transition-all duration-300"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Imagen de fondo con mix-blend-mode para transparencia */}
        <img
          src={evaluator.image}
          alt={evaluator.name}
          className="w-full h-full object-cover opacity-90"
        />
        
        {/* Overlay oscuro que aparece en hover */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-60 transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
        />
        
        {/* Información adicional que aparece en hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center p-4 transition-opacity duration-300 ${
            isHovering ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="text-center">
            <p className="text-white text-sm leading-relaxed">
              {generateProseDescription()}
            </p>
          </div>
        </div>
      </div>
      
      {/* Nombre debajo de la imagen */}
      <div className="mt-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">
          {evaluator.name}
        </h3>
        <h4>
          {evaluator.country}
        </h4>
      </div>
    </div>
  );
}