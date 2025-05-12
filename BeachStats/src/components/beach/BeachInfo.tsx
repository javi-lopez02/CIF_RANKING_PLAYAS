import { SectionTitle } from "./SectionTitle";

interface BeachInfoProps {
  location: {
    city: string;
    country: string;
    region: string;
    coordinates: string;
  };
  type: string;
  evaluators: string;
  icon: React.ElementType;
}

export function BeachInfo({ location, type, evaluators, icon }: BeachInfoProps) {

    return (
      <div className="w-full max-w-full overflow-hidden">
        <SectionTitle icon={icon} text="Ubicación de la playa" />
        
        <div className="p-4 border border-gray-200">
          <div className="space-y-3">
            <div>
              <strong className="text-dark font-lato">Ciudad: </strong>
              <span className="font-lato">{location.city}</span>
            </div>
            
            <div>
              <strong className="text-dark font-lato">País: </strong>
              <span className="font-lato">{location.country}</span>
            </div>
            
            <div>
              <strong className="text-dark font-lato">Región: </strong>
              <span className="font-lato">{location.region}</span>
            </div>
            
            <div>
              <strong className="text-dark font-lato">Coordenadas: </strong>
              <span className="font-lato">{location.coordinates}</span>
            </div>
            
            <div>
              <strong className="text-dark font-lato">Tipo de playa: </strong>
              <span className="font-lato">{type}</span>
            </div>
            
            <div>
              <strong className="text-dark font-lato">Evaluador(es): </strong>
              <span className="font-lato">{evaluators}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }