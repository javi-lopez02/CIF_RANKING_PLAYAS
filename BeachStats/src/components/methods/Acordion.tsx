import { useState } from "react";
import { AccordionItem } from "./AcordionItem";

// Define los tipos para los elementos del acordeón
type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
};

// Props para el componente Accordion
interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

// Componente principal del acordeón
const Accordion = ({
  items,
  allowMultiple = false,
  className = "",
}: AccordionProps) => {
  // Estado para controlar qué elementos están abiertos
  const [openItems, setOpenItems] = useState<(string | number)[]>([]);

  // Manejador para abrir/cerrar elementos
  const toggleAccordion = (id: string | number) => {
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
  };

  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-sm ${className}`}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          item={item}
          isOpen={openItems.includes(item.id)}
          onClick={() => toggleAccordion(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
