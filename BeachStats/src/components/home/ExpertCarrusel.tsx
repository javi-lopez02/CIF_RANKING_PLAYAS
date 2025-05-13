import { useState, useRef } from "react";
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
      description:
        "Especialista en ecosistemas costeros con más de 10 años de experiencia evaluando la salud de las playas.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      name: "Elena Ramírez",
      role: "Oceanógrafa",
      description:
        "Investigadora en calidad del agua y preservación de entornos marinos.",
      image:
        "https://img.freepik.com/foto-gratis/mujer-frente-pelo-rizado_1139-581.jpg",
    },
    {
      id: 3,
      name: "FAQ",
      role: "Preguntas Frecuentes",
      description:
        "Descubre cómo evaluamos las playas según criterios científicos y metodología avanzada para presentarte las mejores opciones.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSab0PwQjvaAWq5RJXQ4u37RmR1lX2TVCJWAA&s",
    },
    {
      id: 4,
      name: "Laura Sánchez",
      role: "Ambientalista",
      description:
        "Experta en conservación de fauna costera y evaluación de interacción humana con la vida silvestre.",
      image:
        "https://www.shutterstock.com/image-photo/young-pretty-caucasian-woman-face-260nw-1854611098.jpg",
    },
    {
      id: 5,
      name: "Miguel Torres",
      role: "Geólogo Costero",
      description:
        "Especializado en formaciones de arena y estructuras geológicas de las playas.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZMk_9YEP8TRPcx0llQDSz99YfjAmDzqphA&s",
    },
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
      <h2 className="text-center font-semibold font-sunbone text-lg">
        NUESTROS EVALUADORES
      </h2>

      <div className="relative flex justify-center items-center h-96">
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white bg-opacity-40 p-2 rounded-full"
        >
          <MdOutlineNavigateBefore className="h-6 w-6 text-dark" />
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
                    ? "h-80 w-64 z-20"
                    : offset === -1 || offset === 1
                    ? "h-72 w-56 z-10 opacity-90"
                    : "h-64 w-48 z-0 opacity-70"
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
                      <h3 className="text-2xl font-bold font-sunbone mb-1">
                        {evaluador.name}
                      </h3>
                      <p className="text-sm font-medium font-lato text-gray-300 mb-4">
                        {evaluador.role}
                      </p>
                      <p className="text-sm font-lato text-center">
                        {evaluador.description}
                      </p>
                      <button className="mt-4 px-4 py-2 bg-white text-black text-sm rounded-md hover:bg-gold transition">
                        Conocer más
                      </button>
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
          <MdOutlineNavigateNext className="h-6 w-6 text-dark" />
        </button>
      </div>

      {/* Indicadores de posición */}
      <div className="flex justify-center mt-6 space-x-2">
        {evaluadores.map((_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all ${
              index === currentIndex ? "w-6 bg-black" : "w-2 bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
