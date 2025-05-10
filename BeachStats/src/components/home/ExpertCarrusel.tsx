import { useState, useRef } from 'react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";


export default function ExpertCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(2); // Empezamos con el índice central
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  // Datos de los evaluadores
  const evaluadores = [
    {
      id: 1,
      name: "Carlos Mendoza",
      role: "Biólogo Marino",
      description: "Especialista en ecosistemas costeros con más de 10 años de experiencia evaluando la salud de las playas.",
      image: "/api/placeholder/300/400?text=Playa+1"
    },
    {
      id: 2,
      name: "Elena Ramírez",
      role: "Oceanógrafa",
      description: "Investigadora en calidad del agua y preservación de entornos marinos.",
      image: "/api/placeholder/300/400?text=Playa+2"
    },
    {
      id: 3,
      name: "FAQ",
      role: "Preguntas Frecuentes",
      description: "Descubre cómo evaluamos las playas según criterios científicos y metodología avanzada para presentarte las mejores opciones.",
      image: "/api/placeholder/300/400?text=FAQ"
    },
    {
      id: 4,
      name: "Laura Sánchez",
      role: "Ambientalista",
      description: "Experta en conservación de fauna costera y evaluación de interacción humana con la vida silvestre.",
      image: "/api/placeholder/300/400?text=Playa+4"
    },
    {
      id: 5,
      name: "Miguel Torres",
      role: "Geólogo Costero",
      description: "Especializado en formaciones de arena y estructuras geológicas de las playas.",
      image: "/api/placeholder/300/400?text=Playa+5"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === evaluadores.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? evaluadores.length - 1 : prevIndex - 1
    );
  };

  // Para obtener el índice circular (maneja el ciclo del carrusel)
  const getCircularIndex = (index: number) => {
    const length = evaluadores.length;
    return ((index % length) + length) % length;
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <h2 className="text-center font-semibold text-lg mb-6">NUESTROS EVALUADORES</h2>
      
      <div className="relative flex justify-center items-center h-96">
        {/* Botones de navegación */}
        <button 
          onClick={prevSlide} 
          className="absolute left-4 z-10 bg-white bg-opacity-40 p-2 rounded-full"
        >
          <MdOutlineNavigateBefore className="h-6 w-6 text-gray-700" />
        </button>
        
        <div 
          className="flex items-center justify-center space-x-4 transition-transform duration-500"
          ref={carouselRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Renderizamos 5 tarjetas visibles, centradas en currentIndex */}
          {[-2, -1, 0, 1, 2].map((offset) => {
            const index = getCircularIndex(currentIndex + offset);
            const evaluador = evaluadores[index];
            const isCentered = offset === 0;
            
            return (
              <div 
                key={evaluador.id}
                className={`relative transition-all duration-500 ease-in-out ${
                  isCentered 
                    ? 'h-80 w-64 z-20' 
                    : offset === -1 || offset === 1 
                      ? 'h-72 w-56 z-10 opacity-90' 
                      : 'h-64 w-48 z-0 opacity-70'
                }`}
              >
                <div 
                  className="h-full w-full overflow-hidden relative rounded-md shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${evaluador.image})` }}
                >
                  {/* Overlay para las tarjetas no centradas */}
                  {!isCentered && (
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  )}
                  
                  {/* Contenido para la tarjeta central cuando se hace hover */}
                  {isCentered && isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold mb-1">{evaluador.name}</h3>
                      <p className="text-sm font-medium text-gray-300 mb-4">{evaluador.role}</p>
                      <p className="text-sm text-center">{evaluador.description}</p>
                      {evaluador.id === 3 && (
                        <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-md hover:bg-gray-200 transition">
                          Conocer más
                        </button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        
        <button 
          onClick={nextSlide} 
          className="absolute right-4 z-10 bg-white bg-opacity-40 p-2 rounded-full"
        >
          <MdOutlineNavigateNext className="h-6 w-6 text-gray-700" />
        </button>
      </div>
      
      {/* Indicadores de posición */}
      <div className="flex justify-center mt-6 space-x-2">
        {evaluadores.map((_, index) => (
          <div 
            key={index} 
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? 'w-6 bg-black' : 'w-2 bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}