import { useState, useEffect } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function MediaCoverage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Lista de medios
  const mediaLogos = [
    {
      name: "Bloomberg",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5aXBsJyscFsMrbJ6avAxQtt5av7jP3HsFw&s",
    },
    {
      name: "Miami Herald",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6DbjzDrD1wiAUQA9GivdG_nQYGBFpSSMeNw&s",
    },
    {
      name: "Daily Mail",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_m-Erns4Bt-V7qH6HyjwpDAna_xn6_iVFjw&s",
    },
    {
      name: "CNN",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj-qNvZ2PIe_XaU4rZV4RLm5OWsqgGft6Lw&s",
    },
    {
      name: "The Australian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1jVA77bCBgDhHwQ-HfmiwVUibOwCpOlSWo5LgabW2lPgEv250Pu_x8W4dWqiCT-6kuWE&usqp=CAU",
    },
    {
      name: "The Sun",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr62NfauVytsJbv5GOmR3bpafjssRs1Qvuvg&s",
    },
    {
      name: "Cosmopolitan",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIEaRjlIP1hlFQkvNw_UEXh2YRCJ6IKa0u2g&s",
    },
    {
      name: "Thrillist",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP5QrK5ByomyZaQGss5oCZe9mD4E5d3pwPPw&s",
    },
    {
      name: "Chicago Tribune",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzwJruyj0HqIRzl9QAjSmT9X1rS-73X07GvA&s",
    },
    {
      name: "MSN",
      image:
        "https://logos-world.net/wp-content/uploads/2022/05/MSN-Emblem.png",
    },
    {
      name: "Newsweek",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlecYtY4Ucm2TTYYQ9kjtcWi51Bxh8fl18kQ&s",
    },
    {
      name: "Canada.com",
      image:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0002/2114/brand.gif?itok=HTBcMhGJ",
    },
    {
      name: "Sydney Morning Herald",
      image:
        "https://images.squarespace-cdn.com/content/v1/5b24b18bcc8fedb17f91d9ac/1597578347038-1Z51UFA8JRD42WANEBSO/Sydney-Morning-Herald-logo-final.jpg",
    },
    {
      name: "Independent",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCajtN_cU4wnWO6Yfj01_C_-tUev9t12C2uQ&s",
    },
    {
      name: "Time Out",
      image:
        "https://www.visit-goodplace.com/wp-content/uploads/2022/05/timeout-logo-moder.png",
    },
  ];

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
    } else return 5;
  };

  const logosPerSlide = getLogosToShow();
  const totalSlides = Math.ceil(mediaLogos.length / logosPerSlide);

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
    if (index < mediaLogos.length) {
      visibleLogos.push(mediaLogos[index]);
    }
  }

  return (
    <div className="w-full py-4 px-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-light text-dark mb-2">MEDIA COVERAGE</h2>
          <div className="h-0.5 bg-sky mx-auto"></div>
        </div>

        {/* Carrusel */}
        <div className="relative">
          {/* Flecha izquierda */}
          <button
            className="absolute top-1/2 left-4 -ml-4 -translate-y-1/2 bg-white hover:bg-gold rounded-full p-1 shadow-md hover:shadow-lg transition-shadow z-10"
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
            className="absolute top-1/2 right-4 -mr-4 -translate-y-1/2 bg-white hover:bg-gold rounded-full p-1 shadow-md hover:shadow-lg transition-shadow z-10"
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
                  ? "w-8 h-2 bg-gold"
                  : "w-2 h-2 bg-sky hover:bg-navy"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
