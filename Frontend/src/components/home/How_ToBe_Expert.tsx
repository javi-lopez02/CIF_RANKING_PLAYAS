import React from 'react';

export default function HowToBeExpert() {
  return (
    <div className="w-full">
      {/* Título principal */}
      <h2 className="text-center font-bold text-base mb-4">CÓMO SER EVALUADOR DEL RANKING</h2>
      
      {/* Contenedor de los tres paneles */}
      <div className="flex flex-row">
        {/* Panel 1: Logo */}
        <div className="w-1/3 px-1">
          <img 
            src="/api/placeholder/320/450?text=Panel+1" 
            alt="Logo Mejores Playas" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Panel 2: Información */}
        <div className="w-1/3 px-1">
          <img 
            src="/api/placeholder/320/450?text=Panel+2" 
            alt="Información de registro" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Panel 3: Beneficios */}
        <div className="w-1/3 px-1">
          <img 
            src="/api/placeholder/320/450?text=Panel+3" 
            alt="Beneficios y descarga" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}