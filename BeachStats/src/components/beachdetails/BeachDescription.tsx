import { SectionTitle } from "./SectionTitle";

interface BeachDescriptionProps {
  description: string;
  icon: React.ElementType;
}

export default function BeachDescription( { description, icon }: BeachDescriptionProps) {
    return (
      <div className="w-full max-w-full overflow-hidden">
        {/* Header */}
          <SectionTitle icon={icon} text="Descripcion de la Playa" />
  
        {/* Body */}
        <div className="p-4 border border-gray-200 text-justify font-lato">
          {description}
        </div>
      </div>
    );
  }