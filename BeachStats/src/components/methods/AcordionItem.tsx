import { useMemo } from "react";
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
  preview: string;
};

interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onClick: () => void;
}

export const AccordionItem = ({
  item,
  isOpen,
  onClick,
}: AccordionItemComponentProps) => {
  // Memoizar el contenido del preview para evitar re-renders innecesarios
  const previewContent = useMemo(
    () => (
      <div
        className="flex-1"
      >
        {/* Header con título */}
        <h3 className="font-bold text-dark-700 text-xl leading-tight mb-3">
          {item.title}
        </h3>

        {/* Preview del contenido */}
        {!isOpen && (
          <p className="text-gray-600 text-sm leading-relaxed pr-4 mb-2">
            {item.preview}
          </p>
        )}

        {/* Indicador de "ver más" cuando está cerrado */}
        {!isOpen && (
          <span className="inline-block text-xs text-sky-600 font-medium">
            Ver detalles completos →
          </span>
        )}
      </div>
    ),
    [item.title, item.preview, isOpen]
  );

  // Memoizar el icono para evitar re-renders
  const arrowIcon = useMemo(
    () => (
      <div
        className={`ml-4 flex-shrink-0 ${
          isOpen ? "text-white" : "text-gray-500"
        }`}
      >
        {isOpen ? <BiUpArrowAlt size={24} /> : <BiDownArrowAlt size={24} />}
      </div>
    ),
    [isOpen]
  );

  return (
    <div className="border-b border-gray-200 rounded-xl bg-white hover:bg-gray-50 last:border-b-0 border-l-4 border-l-sky-500 transition-all duration-200">
      {/* Botón principal del acordeón */}
      <button
        className={`flex justify-between items-start w-full px-6 py-5 text-left transition-colors ${
          isOpen
            ? "bg-sky-500"
            : "hover:bg-gray-50"
        }`}
        onClick={onClick}
        aria-expanded={isOpen}
      >
        {previewContent}
        {arrowIcon}
      </button>

      {/* Contenido expandible */}
      <div
        className={`overflow-scroll scrollbar-hide transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5 bg-white hover:bg-gray-50 ">
          <div className="border-t border-gold-500 pt-4">
            <div className="prose prose-sm max-w-none text-gray-700">
              {item.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
