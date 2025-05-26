import { useCallback, useMemo, useState } from "react";
import { AccordionItem } from "./AcordionItem";

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
  preview: string;
};

export const Accordion = ({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) => {
  // Estado para controlar qué elementos están abiertos
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  // Función memoizada para toggle del acordeón (optimización de rendimiento)
  const toggleAccordion = useCallback(
    (id: string | number) => {
      setOpenItems((prevOpenItems) => {
        // Si el elemento ya está abierto, cerrarlo
        if (prevOpenItems.includes(id)) {
          return prevOpenItems.filter((itemId) => itemId !== id);
        }

        // Si permitimos múltiples elementos abiertos, añadir este a la lista
        if (allowMultiple) {
          return [...prevOpenItems, id];
        }

        // Si no permitimos múltiples elementos, reemplazar con este único elemento
        return [id];
      });
    },
    [allowMultiple]
  );

  // Memoizar el header para evitar re-renders innecesarios
  const accordionHeader = useMemo(
    () => (
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-dark-700 mb-3">
          Metodología de Ranking y Cálculo
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora los diferentes métodos, fórmulas y criterios utilizados en
          nuestro sistema de ranking
        </p>
      </div>
    ),
    []
  );

  // Memoizar la lista de items del acordeón
  const accordionItems = useMemo(
    () =>
      items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onClick={() => toggleAccordion(item.id)}
        />
      )),
    [items, openItems, toggleAccordion]
  );

  return (
    <div className="max-w-5xl mx-auto">
      {/* Header del acordeón */}
      {accordionHeader}

      {/* Contenedor principal de los items */}
      <div
        className={`flex flex-col rounded-xl border-gray-200 overflow-hidden gap-8 ${className}`}
      >
        {accordionItems}
      </div>
    </div>
  );
};
