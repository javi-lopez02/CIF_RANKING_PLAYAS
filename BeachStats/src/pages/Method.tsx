import { Accordion } from "../components/methods/Acordion";
import ComunicationMarc from "../components/methods/ComunicationMarc";
import CreditibilyIndex from "../components/methods/CredibilityIndex";
import EvaluationMethod from "../components/methods/EvaluationMethod";
import EvaluationProccess from "../components/methods/EvaluationProccess";
import MathExample from "../components/methods/MathExample";
import Methodologic from "../components/methods/Methodologic";
import Usuarios from "../components/methods/Usuarios";

type AccordionItem = {
  id: string | number;
  title: string;
  content: React.ReactNode;
  preview: string;
};

const accordionItems: AccordionItem[] = [
  {
    id: 0,
    title: "Metodo de Evaluacion",
    content: <EvaluationMethod></EvaluationMethod>,
    preview:
      "Conoce el método de evaluación utilizado para calificar las playas y su impacto en el ranking.",},
  {
    id: 1,
    title: "Proceso de Evaluacion",
    content: <EvaluationProccess></EvaluationProccess>,
    preview:
      "Entiende el proceso de evaluación que se sigue para calificar las playas y su impacto en el ranking.",
  },
  {
    id: 2,
    title: "Índice de Credibilidad",
    content: <CreditibilyIndex></CreditibilyIndex>,
    preview:
      "Explora cómo se calcula el Índice de Credibilidad y su importancia en la evaluación de playas.",
  },
  {
    id: 3,
    title: "Ejemplos hipotéticos de cálculo",
    content: <MathExample></MathExample>,
    preview:
      "Descubre ejemplos prácticos de cómo se aplican las fórmulas de ranking en situaciones reales.",
  },
  {
    id: 4,
    title: "Metodología",
    content: <Methodologic></Methodologic>,
    preview:
      "Conoce la metodología detrás de nuestro sistema de ranking y cómo se implementa en la práctica.",
  },
  {
    id: 5,
    title: "Usuarios del Ranking",
    content: <Usuarios></Usuarios>,
    preview:
      "Conoce los usuarios de nuestro sistema de ranking y cómo se beneficia cada uno.",
  },
  {
    id: 6,
    title: "Marco de Comunicación",
    content: <ComunicationMarc></ComunicationMarc>,
    preview:
      "Conoce el marco de comunicación utilizado para presentar los resultados del ranking de playas.",
  },
];

export default function Method() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Contenido principal */}
      <div className="w-full md:w-4/5 py-8">
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
