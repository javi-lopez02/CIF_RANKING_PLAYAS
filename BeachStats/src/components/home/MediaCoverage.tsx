import { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import useMedia from "../../customHooks/useMedia";
import { toast } from "sonner";

export default function MediaCoverage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const {media, error} = useMedia();

  // Número de logos a mostrar a la vez (responsive)
  const getLogosToShow = () => {
    if (window.innerWidth < 640) {
      return 1;
    }
    if (window.innerWidth < 768) {
      return 2;
    }
    if (window.innerWidth < 1024) {
      return 3;
    }
    if (window.innerWidth < 1280) {
      return 4;
    } else return 4;
  };

  const logosPerSlide = getLogosToShow();
  const totalSlides = Math.ceil(media.length / logosPerSlide);

  // Autoplay
  useEffect(() => {
    let interval: number;
    if (autoplay) {
      interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % totalSlides);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [autoplay, totalSlides]);

  // Navegar a la siguiente diapositiva
  const nextSlide = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  // Navegar a la diapositiva anterior
  const prevSlide = () => {
    setAutoplay(false);
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  // Cambiar a una diapositiva específica
  const goToSlide = (index: number) => {
    setAutoplay(false);
    setActiveSlide(index);
  };

  // Calcular qué logos mostrar en la diapositiva actual
  const visibleLogos = [];
  for (let i = 0; i < logosPerSlide; i++) {
    const index = activeSlide * logosPerSlide + i;
    if (index < media.length) {
      visibleLogos.push(media[index]);
    }
  }

  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-dark-700 mb-2">MEDIA COVERAGE</h2>
          <div className="h-0.5 bg-sky-500 mx-auto"></div>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button
            className="absolute top-1/2 left-4 -ml-4 -translate-y-1/2 bg-white hover:bg-gold-500 rounded-full p-1 shadow-md hover:shadow-lg hover:shadow-sky-300 transition-shadow z-10"
            onClick={prevSlide}
            aria-label="Previous slide"
          >
            <BiLeftArrowAlt size={20} className="text-gray-600" />
          </button>

          {/* Contenedor del carrusel */}
          <div className="overflow-hidden px-4">
            <div className="flex items-center justify-center transition-all duration-500 ease-in-out h-24">
              {visibleLogos.map((media, index) => (
                <div
                  key={`${activeSlide}-${index}`}
                  className="px-6 flex items-center justify-center transition-opacity duration-300 ease-in-out"
                >
                  <div className="group relative">
                    <img
                      src={media.image}
                      alt={`${media.name} logo`}
                      className="h-20 object-contain grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
                      onClick={() => {
                        window.open(media.url, "_blank");
                      }}
                    />
                    <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                      <span className="text-xs font-light text-gray-500">
                        {media.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flecha derecha */}
          <button
            className="absolute top-1/2 right-4 -mr-4 -translate-y-1/2 bg-white hover:bg-gold-500 rounded-full p-1 shadow-md hover:shadow-lg hover:shadow-sky-300 transition-shadow z-10"
            onClick={nextSlide}
            aria-label="Next slide"
          >
            <BiRightArrowAlt size={20} className="text-gray-600" />
          </button>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              aria-label={`Go to slide ${index + 1}`}
              className={`mx-1 rounded-full transition-all duration-300 focus:outline-none ${
                activeSlide === index
                  ? "w-8 h-2 bg-gold-500"
                  : "w-2 h-2 bg-sky-500 hover:bg-navy-500"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
      {error && toast.error("Error al cargar los logos de los medios.")}
    </div>
    
  );
}
