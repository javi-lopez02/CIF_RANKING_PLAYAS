import React, { useState } from "react";
import { Link } from "react-router-dom";
import AdsenseAd from "../googlead/AdsenseAd";

interface AdImage {
  id: number;
  src: string;
  alt: string;
  link?: string;
  title?: string;
  type: "mp4" | "jpg" | "png";
}

interface SidebarAdsProps {
  images?: AdImage[];
  className?: string;
  title?: string;
  showTitle?: boolean;
  spacing?: "compact" | "normal" | "spacious";
}

const SidebarAds: React.FC<SidebarAdsProps> = ({
  images = [
    {
      id: 1,
      src: "/curso cmep.mp4",
      alt: "Anuncio Video 1",
      title: "Producto Destacado 1",
      type: "mp4",
      link: "https://cifplayas.org/cmep/",
    },
    {
      id: 2,
      src: "/Cursos.mp4",
      alt: "Anuncio Video 2",
      title: "Oferta Especial",
      type: "mp4",
      link: "https://cifplayas.org/cursos/",
    },
    {
      id: 3,
      src: "/errores.mp4",
      alt: "Anuncio Video 3",
      title: "Promoción Limitada",
      type: "mp4",
      link: "mailto:coordinacion@rankingmejoresplayas.com",
    },
    {
      id: 4,
      src: "/CIFF-full.png",
      alt: "Anuncio JPG",
      title: "Banner Principal",
      type: "jpg",
      link: "https://cifplayas.org/",
    },
  ],
  className = "",
  title = "Curso Evaluador",
  showTitle = true,
  spacing = "spacious",
}) => {
  const [loadedMedia, setLoadedMedia] = useState<Set<number>>(new Set());
  const [failedMedia, setFailedMedia] = useState<Set<number>>(new Set());

  const handleMediaLoad = (id: number) => {
    setLoadedMedia((prev) => new Set(prev).add(id));
  };

  const handleMediaError = (id: number) => {
    setFailedMedia((prev) => new Set(prev).add(id));
  };

  const getSpacingClass = () => {
    switch (spacing) {
      case "compact":
        return "gap-2";
      case "spacious":
        return "gap-32";
      default:
        return "gap-4";
    }
  };

  const renderMedia = (image: AdImage) => {
    if (image.type === "mp4") {
      return (
        <video
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => handleMediaLoad(image.id)}
          onError={() => handleMediaError(image.id)}
        >
          <source src={image.src} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      );
    } else {
      return (
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          onLoad={() => handleMediaLoad(image.id)}
          onError={() => handleMediaError(image.id)}
          loading="lazy"
        />
      );
    }
  };

  return (
    <aside className={`sidebar-ads w-full max-w-sm mx-auto ${className}`}>
      <AdsenseAd></AdsenseAd>
      {showTitle && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-sky-500 pb-2 mb-4">
            {title}
          </h3>
        </div>
      )}

      <div className={`flex flex-col ${getSpacingClass()}`}>
        {images.map((image) => (
          <div
            key={image.id}
            className="ad-item group relative rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
          >
            {/* Loading/Error State */}
            {!loadedMedia.has(image.id) && !failedMedia.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse z-10 rounded-lg">
                <div className="text-gray-400 text-sm">Cargando...</div>
              </div>
            )}

            {failedMedia.has(image.id) && (
              <div className="h-48 bg-gray-100 flex items-center justify-center rounded-lg">
                <div className="text-center text-gray-400">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-sm">Error al cargar contenido</div>
                </div>
              </div>
            )}

            {/* Media Container - Full card */}
            {image.link && (
              <Link
                to={image.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative group w-full h-full"
              >
                {renderMedia(image)}

                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SidebarAds;
