import { useState } from "react";

export default function EvaluatorCard({ evaluator }) {
    const [isHovering, setIsHovering] = useState(false);
  
    // Aplicar efecto de sombra al texto para mejorar legibilidad
    const textShadowStyle = {
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)",
    };
  
    return (
      <div
        className="relative w-full h-96 rounded-lg overflow-hidden shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Imagen de fondo */}
        <div className="absolute inset-0 bg-gradient-to-b from-white to-black opacity-0 z-10" />
        <img
          src={evaluator.image}
          alt={evaluator.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Contenido visible inicialmente (desaparece en hover) */}
        <div
          className={`absolute inset-x-0 bottom-0 p-5 z-20 text-white transition-opacity duration-300 ${
            isHovering ? "opacity-0" : "opacity-100"
          }`}
        >
          <h2 className="text-2xl font-bold font-sans mb-2" style={textShadowStyle}>
            {evaluator.name}
          </h2>
          <p className="text-lg font-medium" style={textShadowStyle}>
            CI: {evaluator.ci}
          </p>
        </div>
  
        {/* Contenido que aparece al hacer hover */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-80 z-30 flex flex-col justify-center p-8 transition-opacity duration-300 ${
            isHovering ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h2 className="text-3xl font-bold text-white mb-6">{evaluator.name}</h2>
          <div className="space-y-3 text-white text-lg">
            <p>
              <span className="font-semibold">CI:</span> {evaluator.ci}
            </p>
            <p>
              <span className="font-semibold">Cargo:</span> {evaluator.role}
            </p>
            <p>
              <span className="font-semibold">Departamento:</span>{" "}
              {evaluator.department}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {evaluator.email}
            </p>
            <p>
              <span className="font-semibold">Teléfono:</span> {evaluator.phone}
            </p>
          </div>
        </div>
      </div>
    );
  }
  