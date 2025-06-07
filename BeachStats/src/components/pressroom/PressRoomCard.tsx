import React from "react";
import { Media } from "../../types";

interface NewsItemProps {
  item: Media;
  onClick?: (item: Media) => void;
}

const PressRoomCard: React.FC<NewsItemProps> = ({ item, onClick }) => {
  return (
    <div
      className="py-5 px-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-all duration-200 bg-white group"
      onClick={() => onClick?.(item)}
    >
      {/* Todo en una línea horizontal */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={item.image} 
            className="min-h-10 w-auto object-contain min-w-20 max-w-20"
          />
        </div>
        
        {/* Título */}
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-gray-900 leading-relaxed uppercase tracking-wide truncate-none group-hover:text-gray-700 transition-colors">
            {item.url}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PressRoomCard;