import { useState } from "react";

// BeachCard component - a clickable card that shows a beach category with image
export default function BestBeachesCard({
  image = "/api/placeholder/400/300",
  title = "Mejores playas",
  onClick = () => console.log("Card clicked"),
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col rounded-lg overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container with fixed aspect ratio */}
      <div className="w-full h-48 relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* Overlay effect on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <span className="text-white font-bold px-3 py-1 rounded-full bg-blue-500 text-sm">
              Ver más
            </span>
          </div>
        )}
      </div>

      {/* Text container */}
      <div className="p-3 bg-white">
        <h3 className="text-center font-medium text-gray-800">{title}</h3>
      </div>
    </div>
  );
}
