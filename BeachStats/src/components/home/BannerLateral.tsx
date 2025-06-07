import React, { useState } from 'react';

interface AdImage {
  id: number;
  src: string;
  alt: string;
  link?: string;
  title?: string;
  type: 'gif' | 'jpg' | 'png';
}

interface SidebarAdsProps {
  images?: AdImage[];
  className?: string;
  title?: string;
  showTitle?: boolean;
  spacing?: 'compact' | 'normal' | 'spacious';
}

const SidebarAds: React.FC<SidebarAdsProps> = ({
  images = [
    {
      id: 1,
      src: "https://via.placeholder.com/300x250/ff6b6b/ffffff?text=GIF+Ad+1",
      alt: "Anuncio GIF 1",
      title: "Producto Destacado 1",
      type: 'gif',
      link: "#"
    },
    {
      id: 2,
      src: "https://via.placeholder.com/300x250/4ecdc4/ffffff?text=GIF+Ad+2",
      alt: "Anuncio GIF 2", 
      title: "Oferta Especial",
      type: 'gif',
      link: "#"
    },
    {
      id: 3,
      src: "https://via.placeholder.com/300x250/45b7d1/ffffff?text=GIF+Ad+3",
      alt: "Anuncio GIF 3",
      title: "Promoción Limitada",
      type: 'gif',
      link: "#"
    },
    {
      id: 4,
      src: "https://via.placeholder.com/300x250/f9ca24/ffffff?text=JPG+Ad",
      alt: "Anuncio JPG",
      title: "Banner Principal",
      type: 'jpg',
      link: "#"
    }
  ],
  className = "",
  title = "Anuncios",
  showTitle = true,
  spacing = 'normal'
}) => {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (id: number) => {
    setLoadedImages(prev => new Set(prev).add(id));
  };

  const handleImageError = (id: number) => {
    setFailedImages(prev => new Set(prev).add(id));
  };

  const getSpacingClass = () => {
    switch (spacing) {
      case 'compact': return 'gap-2';
      case 'spacious': return 'gap-8';
      default: return 'gap-4';
    }
  };

  return (
    <aside className={`sidebar-ads w-full max-w-sm mx-auto ${className}`}>
      {showTitle && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
            {title}
          </h3>
        </div>
      )}
      
      <div className={`flex flex-col ${getSpacingClass()}`}>
        {images.map((image) => (
          <div 
            key={image.id}
            className="ad-item group relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200"
          >
            {/* Loading/Error State */}
            {!loadedImages.has(image.id) && !failedImages.has(image.id) && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 animate-pulse">
                <div className="text-gray-400 text-sm">Cargando...</div>
              </div>
            )}
            
            {failedImages.has(image.id) && (
              <div className="h-48 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <div className="text-2xl mb-2">📷</div>
                  <div className="text-sm">Error al cargar imagen</div>
                </div>
              </div>
            )}

            {/* Image Container */}
            <div className="relative overflow-hidden">
              {image.link ? (
                <a 
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative group"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    loading="lazy"
                  />
                  
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium">
                      Ver más →
                    </div>
                  </div>
                </a>
              ) : (
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover"
                  onLoad={() => handleImageLoad(image.id)}
                  onError={() => handleImageError(image.id)}
                  loading="lazy"
                />
              )}
              
              {/* Type Badge */}
              <div className="absolute top-2 right-2">
                <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                  image.type === 'gif' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-blue-500 text-white'
                }`}>
                  {image.type.toUpperCase()}
                </span>
              </div>
            </div>

            {/* Title/Caption */}
            {image.title && (
              <div className="p-3">
                <h4 className="text-sm font-medium text-gray-800 line-clamp-2">
                  {image.title}
                </h4>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500 text-center">
          Contenido promocional
        </p>
      </div>
    </aside>
  );
};

// Componente adicional para uso específico con tus imágenes
export const PlayasSidebarAds: React.FC<{ className?: string }> = ({ className }) => {
  const playasImages: AdImage[] = [
    {
      id: 1,
      src: "/images/playa-animada-1.gif", // Reemplaza con tu ruta
      alt: "Animación playa paradisíaca",
      title: "Descubre las mejores playas",
      type: 'gif',
      link: "/playas/destacadas"
    },
    {
      id: 2,
      src: "/images/oleaje-animado.gif", // Reemplaza con tu ruta
      alt: "Oleaje animado",
      title: "Condiciones del mar en tiempo real",
      type: 'gif', 
      link: "/condiciones-mar"
    },
    {
      id: 3,
      src: "/images/sunset-beach.gif", // Reemplaza con tu ruta
      alt: "Atardecer en la playa",
      title: "Los mejores atardeceres",
      type: 'gif',
      link: "/atardeceres"
    },
    {
      id: 4,
      src: "/images/playa-principal.jpg", // Reemplaza con tu ruta
      alt: "Playa principal",
      title: "Guía completa de playas españolas",
      type: 'jpg',
      link: "/guia-playas"
    }
  ];

  return (
    <SidebarAds 
      images={playasImages}
      title="Descubre más playas"
      className={className}
      spacing="normal"
    />
  );
};

export default SidebarAds;