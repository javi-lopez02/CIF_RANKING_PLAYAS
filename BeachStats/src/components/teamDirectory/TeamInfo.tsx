import {
  BiAward,
  BiBook,
  BiFile,
  BiPen,
  BiShield,
  BiTrendingUp,
  BiUserPlus,
} from "react-icons/bi";
import { FaMicroscope } from "react-icons/fa6";

export default function TeamInfo() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-sky-50 p-8 rounded-2xl shadow-lg border border-sky-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-4">
            <FaMicroscope className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Consejo Científico del Ranking de Mejores Playas
          </h1>
          <p className="text-sky-600 font-semibold text-lg">
            La piedra angular de nuestro compromiso con la ciencia y la
            excelencia
          </p>
        </div>

        {/* Descripción principal */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Integrado exclusivamente por{" "}
            <span className="font-semibold text-sky-600">
              evaluadores con doctorado
            </span>{" "}
            y al menos cinco años de experiencia investigativa, este consejo
            garantiza que cada evaluación y cada ajuste en el ranking respondan
            al{" "}
            <span className="font-semibold text-sky-600">
              conocimiento más actual y riguroso
            </span>{" "}
            en ciencias marinas.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Su participación activa no solo aporta{" "}
            <span className="font-semibold text-sky-600">credibilidad</span>
            , sino que también fortalece la base metodológica que distingue a
            nuestro ranking de las listas meramente estéticas y subjetivas.
          </p>
        </div>

        {/* Funciones clave */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-conservation-500">
            <div className="flex items-center mb-3">
              <BiTrendingUp className="w-5 h-5 text-conservation-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Revisión Continua</h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Revisión anual del marco de priorización, ajuste de indicadores y
              propuesta de nuevas tipologías de playa para mantener el ranking a
              la vanguardia de la ciencia
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-sky-500">
            <div className="flex items-center mb-3">
              <BiFile className="w-5 h-5 text-sky-600 mr-2" />
              <h3 className="font-semibold text-gray-800">
                Validación Estadística
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Validación estadística de los resultados, asegurando la veracidad
              de cada evaluación y fortaleciendo el valor práctico del ranking
              como herramienta de gestión sostenible
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-protection-500">
            <div className="flex items-center mb-3">
              <BiPen className="w-5 h-5 text-protection-600 mr-2" />
              <h3 className="font-semibold text-gray-800">
                Divulgación Científica
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Participación como coautores en publicaciones anuales y editores
              de la sesión temática en el Journal of Coastal Research
            </p>
          </div>

          <div className="bg-white rounded-lg p-5 shadow-sm border-l-4 border-recreation-500">
            <div className="flex items-center mb-3">
              <BiBook className="w-5 h-5 text-recreation-600 mr-2" />
              <h3 className="font-semibold text-gray-800">
                Evaluación Técnica
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Evaluación técnica rigurosa que responde a las complejidades de
              los sistemas costeros y playeros con base científica sólida
            </p>
          </div>
        </div>

        {/* Requisitos y diferenciadores */}
        <div className="bg-gradient-to-r from-sky-500 to-sky-500 rounded-xl p-6 text-white mb-6">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <BiShield className="w-6 h-6 mr-2" />
            Requisitos de Excelencia
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start">
              <BiAward className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Doctorado Requerido</h4>
                <p className="text-sky-50 text-sm">
                  Exclusivamente evaluadores con título doctoral
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <BiUserPlus className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-1">Experiencia Comprobada</h4>
                <p className="text-sky-50 text-sm">
                  Mínimo 5 años de experiencia investigativa
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impacto */}
        <div className="text-center bg-white rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-bold text-gray-800 mb-3">
            Impacto Global
          </h3>
          <p className="text-gray-700 leading-relaxed">
            El Consejo Científico no solo{" "}
            <span className="font-semibold text-sky-600">
              eleva la calidad de las playas
            </span>
            , sino también del{" "}
            <span className="font-semibold text-sky-600">
              conocimiento costero global
            </span>
            , creando un ranking que es un{" "}
            <span className="font-semibold text-sky-600">
              reflejo vivo y dinámico
            </span>{" "}
            de las realidades ambientales y sociales.
          </p>
        </div>
      </div>
    </div>
  );
}
