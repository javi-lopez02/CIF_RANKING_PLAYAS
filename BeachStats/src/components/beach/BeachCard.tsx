interface BeachCardProps {
  beach: Beach;
  onClick: (beachId: string | number) => void;
}

interface Beach {
  id: string | number;
  name: string;
  region: string;
  beachType: string;
  BQV: number;
  image?: string;
}

// Componente de Tarjeta de Playa
export default function BeachCard({ beach, onClick }: BeachCardProps) {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl hover:shadow-navy-400 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
      onClick={() => onClick(beach.id)}
    >
      <div className="h-48 overflow-hidden bg-gray-200">
        <img
          src={beach.image || ""}
          alt={beach.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center text-sky-600 mb-2 line-clamp-2">
          {beach.name}
        </h3>
        <p className="text-sm text-gray-600 text-center mb-3">
          {beach.region} • {beach.beachType}
        </p>
        <div className="flex justify-center">
          <span className="bg-sky-100 text-sky-800 font-medium px-3 py-1 rounded-full text-sm">
            BQV {beach.BQV}
          </span>
        </div>
      </div>
    </div>
  );
}
