import { useState } from "react";
import { SectionTitle } from "./SectionTitle";
import {
  BiCamera,
  BiLeftArrowAlt,
  BiRightArrowAlt,
  BiSearch,
} from "react-icons/bi";
import { Beach } from "../../types";

interface BeachPictureProps {
  beach: Beach;
}

export function BeachPicture({ beach }: BeachPictureProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thumbnailStartIndex, setThumbnailStartIndex] = useState(0);

  // Crear array de imágenes combinando imageBeach y additionalImages
  const allImages = beach.additionalImages && beach.additionalImages.length > 0 
    ? beach.additionalImages 
    : [beach.imageBeach];

  // Ajuste dinámico de miniaturas según viewport
  const maxVisibleThumbnails = 6;

  const nextImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === allImages.length - 1 ? 0 : prevIndex + 1;
      updateThumbnailsVisibility(newIndex);
      return newIndex;
    });
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? allImages.length - 1 : prevIndex - 1;
      updateThumbnailsVisibility(newIndex);
      return newIndex;
    });
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
    updateThumbnailsVisibility(index);
  };

  // Actualiza qué miniaturas deben ser visibles
  const updateThumbnailsVisibility = (activeIndex: number) => {
    // Si el índice activo está fuera del rango visible
    if (
      activeIndex < thumbnailStartIndex ||
      activeIndex >= thumbnailStartIndex + maxVisibleThumbnails
    ) {
      // Ajusta el índice de inicio para mostrar el activo en el medio cuando sea posible
      let newStartIndex = Math.max(
        0,
        activeIndex - Math.floor(maxVisibleThumbnails / 2)
      );

      // Asegúrate de que no exceda el límite
      if (newStartIndex + maxVisibleThumbnails > allImages.length) {
        newStartIndex = Math.max(0, allImages.length - maxVisibleThumbnails);
      }

      setThumbnailStartIndex(newStartIndex);
    }
  };

  // Solo mostrar controles de navegación si hay más de una imagen
  const showNavigation = allImages.length > 1;

  return (
    <div className="w-full max-w-full overflow-hidden">
      <SectionTitle icon={BiCamera} text="Fotos y videos de la playa" />

      <div className="relative w-full">
        {/* Imagen principal con relación de aspecto responsive */}
        <div className="relative w-full aspect-[4/3] md:aspect-video bg-gray-200 overflow-hidden rounded-md">
          <img
            src={allImages[currentIndex]}
            alt={`Vista de playa ${currentIndex + 1}`}
            className="w-full h-full object-cover"
          />

          {/* Botón de lupa */}
          <button className="absolute top-2 right-2 bg-sky-300 hover:bg-navy-500 p-1 sm:p-2 rounded-md">
            <BiSearch className="text-white" size={16} />
          </button>

          {/* Controles de navegación superpuestos (opcional para móvil) - solo si hay múltiples imágenes */}
          {showNavigation && (
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-between px-2 md:hidden">
              <button
                onClick={prevImage}
                className="bg-black/30 hover:bg-black/50 p-1 rounded-full text-white"
              >
                <BiLeftArrowAlt size={20} />
              </button>
              <button
                onClick={nextImage}
                className="bg-black/30 hover:bg-black/50 p-1 rounded-full text-white"
              >
                <BiRightArrowAlt size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Área de miniaturas - solo mostrar si hay múltiples imágenes */}
        {showNavigation && (
          <div className="mt-2 relative flex items-center">
            <div className="flex justify-center space-x-1 xs:space-x-2 sm:space-x-3 mx-auto py-1 sm:py-2 overflow-x-auto w-full scrollbar-hide">
              {allImages
                .slice(
                  thumbnailStartIndex,
                  thumbnailStartIndex + maxVisibleThumbnails
                )
                .map((image, idx) => {
                  const actualIndex = thumbnailStartIndex + idx;
                  return (
                    <div
                      key={actualIndex}
                      className={`w-10 h-8 xs:w-12 xs:h-9 sm:w-16 sm:h-12 cursor-pointer flex-shrink-0 rounded-sm overflow-hidden transition-all ${
                        currentIndex === actualIndex
                          ? "ring-2 ring-sky-300"
                          : "opacity-80 hover:opacity-100"
                      }`}
                      onClick={() => goToImage(actualIndex)}
                    >
                      <img
                        src={image}
                        alt={`Miniatura ${actualIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        {/* Controles e indicador de posición - solo si hay múltiples imágenes */}
        {showNavigation && (
          <div className="hidden md:flex justify-center items-center mt-2 text-sm text-gray-600">
            <button
              onClick={prevImage}
              className="bg-gray-200 hover:bg-gold-500 px-2 py-1 rounded-l flex items-center"
            >
              <BiLeftArrowAlt size={16} />
            </button>

            <span className="px-2 flex items-center">
              {currentIndex + 1} / {allImages.length}
            </span>

            <button
              onClick={nextImage}
              className="bg-gray-200 hover:bg-gold-500 px-2 py-1 rounded-r flex items-center"
            >
              <BiRightArrowAlt size={16} />
            </button>
          </div>
        )}

        {/* Indicador para móvil - solo si hay múltiples imágenes */}
        {showNavigation && (
          <div className="flex md:hidden justify-center items-center mt-1 text-xs text-gray-600">
            <span>
              {currentIndex + 1} / {allImages.length}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}