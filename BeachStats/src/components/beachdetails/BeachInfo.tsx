import { Beach } from "../../types";
import { SectionTitle } from "./SectionTitle";

interface BeachInfoProps {
  beach: Beach;
  icon: React.ElementType;
}

export function BeachInfo({ beach, icon }: BeachInfoProps) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      <SectionTitle icon={icon} text="Información de la playa" />

      <div className="p-4 border border-gray-200 rounded-md">
        <div className="space-y-3">
          <div>
            <strong className="text-dark-700 font-lato">Nombre: </strong>
            <span className="font-lato">{beach.name}</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Ciudad: </strong>
            <span className="font-lato">{beach.municipality}</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Provincia: </strong>
            <span className="font-lato">{beach.province}</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">País: </strong>
            <span className="font-lato">{beach.country}</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Región: </strong>
            <span className="font-lato capitalize">
              {beach.region.replace(/_/g, " ").toLowerCase()}
            </span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Latitud: </strong>
            <span className="font-lato">{beach.latitude}°</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Longitud: </strong>
            <span className="font-lato">{beach.length}°</span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Tipo de playa: </strong>
            <span className="font-lato capitalize">
              {beach.beachType.replace(/_/g, " ").toLowerCase()}
            </span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Evaluaciones: </strong>
            <span className="font-lato">
              {beach.evaluations.length} evaluación(es)
            </span>
          </div>

          <div>
            <strong className="text-dark-700 font-lato">Evaluador(es): </strong>
            <div className="font-lato">
              {beach.evaluations.length > 0 ? (
                <ul className="mt-1 space-y-1">
                  {beach.evaluations.map((evaluation, index) => (
                    <li key={index} className="text-sm">
                      • {evaluation.expert.name}
                      <span className="text-gray-600 ml-2">
                        (Índice de credibilidad: {evaluation.creditibilyIndex})
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <span className="text-gray-500">Sin evaluadores asignados</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
