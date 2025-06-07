import { Expert } from "../../types";
import { SectionTitle } from "./SectionTitle";

interface BeachDescriptionProps {
  evaluations: {
    beachDescription: string;
    expert: Expert;
    creditibilyIndex: number;
  }[];
  icon: React.ElementType;
}

export default function BeachDescription({
  evaluations,
  icon,
}: BeachDescriptionProps) {
  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Header */}
      <SectionTitle icon={icon} text="Descripcion de la Playa" />

      {/* Body */}
      {evaluations.length > 0 && evaluations[0].beachDescription && (
        <div className="p-4 border border-gray-200 rounded-md">
          <p className="font-lato text-sm mt-1 text-gray-700 leading-relaxed">
            {evaluations[0].beachDescription}
          </p>
        </div>
      )}
    </div>
  );
}
