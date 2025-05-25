import { useState, useRef, useEffect } from "react";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import useExpert from "../../customHooks/useExperts";
import { toast } from "sonner";

export default function ExpertCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0); // Cambio: iniciar en 0
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);

  const { experts, loading, error } = useExpert();

  // Efecto para ajustar el índice inicial cuando se cargan los datos
  useEffect(() => {
    if (experts && experts.length > 0) {
      // Si quieres empezar en el centro, ajusta aquí
      setCurrentIndex(Math.floor(experts.length / 2));
    }
  }, [experts]);

  const nextSlide = () => {
    if (!experts || experts.length === 0) return; // Validación
    setCurrentIndex((prevIndex) =>
      prevIndex === experts.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    if (!experts || experts.length === 0) return; // Validación
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? experts.length - 1 : prevIndex - 1
    );
  };

  // Para obtener el índice circular (maneja el ciclo del carrusel)
  const getCircularIndex = (index: number) => {
    if (!experts || experts.length === 0) return 0; // Validación
    const length = experts.length;
    return ((index % length) + length) % length;
  };

  // Mostrar loading state
  if (loading) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <h2 className="text-center font-semibold font-sunbone text-lg">
          NUESTROS EVALUADORES
        </h2>
        <div className="flex justify-center items-center h-96">
          <div className="text-center">Cargando expertos...</div>
        </div>
      </div>
    );
  }

  // Validar que hay expertos disponibles
  if (!experts || experts.length === 0) {
    return (
      <div className="relative w-full overflow-hidden py-8">
        <h2 className="text-center font-semibold font-sunbone text-lg">
          NUESTROS EVALUADORES
        </h2>
        <div className="flex justify-center items-center h-96">
          <div className="text-center">No hay expertos disponibles</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden py-8">
      <h2 className="text-center font-semibold font-sunbone text-lg">
        NUESTROS EVALUADORES
      </h2>

      <div className="relative flex justify-center items-center h-96">
        {/* Botones de navegación */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-10 bg-white bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Experto anterior"
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
            const evaluador = experts[index];
            const isCentered = offset === 0;

            // Validación adicional por si el evaluador no existe
            if (!evaluador) return null;

            return (
              <div
                key={`${evaluador.id}-${index}`} // Clave más única
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
                  style={{
                    backgroundImage: evaluador.image
                      ? `url(${evaluador.image})`
                      : "none",
                    backgroundColor: !evaluador.image
                      ? "#f3f4f6"
                      : "transparent",
                  }}
                >
                  {/* Overlay para las tarjetas no centradas */}
                  {!isCentered && (
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  )}

                  {/* Imagen de fallback si no hay imagen */}
                  {!evaluador.image && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                      <span className="text-gray-500 text-sm">Sin imagen</span>
                    </div>
                  )}

                  {/* Contenido para la tarjeta central cuando se hace hover */}
                  {isCentered && isHovered && (
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white p-6 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold font-sunbone text-center mb-1">
                        {evaluador.name || "Nombre no disponible"}
                      </h3>
                      <p className="text-sm font-medium font-lato text-gray-300 text-center mb-4">
                        ANOS DE EXPERIENCIA: <br />{" "}
                        {evaluador.experienceYears
                          .replace("_", " ")
                          .replace("_", " y ") || "NO DISPONIBLE"}
                      </p>
                      <p className="text-sm font-lato text-center">
                        {evaluador.studyLevel ||
                          "Nivel de estudios no disponible"}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-4 z-10 bg-white bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 transition-all"
          aria-label="Siguiente experto"
        >
          <MdOutlineNavigateNext className="h-6 w-6 text-dark" />
        </button>
      </div>

      {/* Indicadores de posición */}
      <div className="flex justify-center mt-6 space-x-2">
        {experts.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all cursor-pointer ${
              index === currentIndex
                ? "w-6 bg-black"
                : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir al experto ${index + 1}`}
          />
        ))}
      </div>
      {error && toast.error("Error al cargar los expertos")}
    </div>
  );
}
