import Accordion from "../components/methods/Acordion";
import CreditibilyIndex from "../components/methods/CredibilityIndex";
import MathExample from "../components/methods/MathExample";
import Methodologic from "../components/methods/Methodologic";

type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
};

const accordionItems: AccordionItem[] = [
  {
    id: 1,
    title: "Índice de Credibilidad",
    content: <CreditibilyIndex></CreditibilyIndex>,
  },
  {
    id: 2,
    title: "Ejemplos hipotéticos de cálculo",
    content: <MathExample></MathExample>,
  },
  {
    id: 3,
    title: "Metodología",
    content: <Methodologic></Methodologic>,
  },
];

export default function Method() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="p-8 w-full mx-auto">
        <h1 className="py-2 text-center font-sans font-bold text-dark text-4xl">
          Métodos de Evaluación
        </h1>
        <Accordion items={accordionItems} />
      </div>

      {/* Sección de Google Anuncios */}
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
}
