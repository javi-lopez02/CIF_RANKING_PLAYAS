import React from "react";

interface BeMapProps {
  mapId?: string;
  className?: string;
  style?: React.CSSProperties;
  aspectRatio?: string; // Por ejemplo: "16:9", "4:3", "1:1"
  minHeight?: number;
  maxHeight?: number;
}

const BeMap: React.FC<BeMapProps> = ({
  mapId = "683e9d5ee629219295fa0d70", // Tu ID de mapa actual
  className = "",
  style = {},
  aspectRatio = "16:9",
  minHeight = 300,
  maxHeight = 600,
}) => {
  const mapUrl = `https://app.bemaps.es/user-map/${mapId}/embed`;

  // Calcular el ratio de aspecto
  const [widthRatio, heightRatio] = aspectRatio.split(":").map(Number);
  const aspectRatioPercent = (heightRatio / widthRatio) * 100;

  const containerStyle: React.CSSProperties = {
    width: "100%",
    position: "relative",
    paddingBottom: `${aspectRatioPercent}%`,
    height: 0,
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
    background: "#f8f9fa",
    ...style,
  };

  const iframeStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "12px",
    minHeight: `${minHeight}px`,
    maxHeight: `${maxHeight}px`,
  };

  return (
    <div
      className={`bemap-responsive-container ${className}`}
      style={containerStyle}
    >
      <iframe
        className="bemaps-responsive"
        src={mapUrl}
        frameBorder="0"
        scrolling="no"
        title="Mapa de playas"
        style={iframeStyle}
        loading="lazy"
        allowFullScreen
      />
    </div>
  );
};

// Componente adicional para casos específicos con CSS personalizado
export const BeMapWithCustomCSS: React.FC<BeMapProps> = (props) => {
  return (
    <>
      <style>{`
        .bemap-responsive-container {
          width: 100%;
          margin: 20px auto;
          max-width: 1200px;
        }
        
        .bemap-responsive-container iframe {
          transition: transform 0.3s ease;
        }
        
        .bemap-responsive-container:hover iframe {
          transform: scale(1.02);
        }
        
        /* Breakpoints responsive */
        @media (max-width: 768px) {
          .bemap-responsive-container {
            margin: 15px 10px;
            border-radius: 8px;
            box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          }
          
          .bemap-responsive-container iframe {
            border-radius: 8px;
          }
        }
        
        @media (max-width: 480px) {
          .bemap-responsive-container {
            margin: 10px 5px;
            border-radius: 6px;
          }
          
          .bemap-responsive-container iframe {
            border-radius: 6px;
          }
        }
        
        /* Para pantallas muy pequeñas */
        @media (max-width: 360px) {
          .bemap-responsive-container {
            padding-bottom: 75% !important; /* Ratio más cuadrado en móviles pequeños */
          }
        }
        
        /* Loading state */
        .bemap-responsive-container::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 40px;
          height: 40px;
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          z-index: 1;
        }
        
        .bemap-responsive-container iframe {
          z-index: 2;
        }
        
        @keyframes spin {
          0% { transform: translate(-50%, -50%) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg); }
        }
      `}</style>
      <BeMap {...props} />
    </>
  );
};

export default BeMap;
