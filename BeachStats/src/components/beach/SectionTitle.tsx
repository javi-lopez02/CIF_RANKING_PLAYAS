interface SectionTitleProps {
  icon: React.ElementType;
  text: string;
}

export function SectionTitle({ icon, text }: SectionTitleProps) {
  const Icon = icon;

  return (
    <div className="bg-sky text-white font-sans p-3 flex items-center mb-2">
      <Icon className="mr-2" size={20} />
      <h2 className="text-xl font-bold ">{text}</h2>
    </div>
  );
}
