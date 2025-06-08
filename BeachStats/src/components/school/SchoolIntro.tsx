import { BiAward, BiBookOpen, BiCalendar, BiGlobe, BiSolidGraduation } from "react-icons/bi";

export default function SchoolIntro() {
  return (
    <div className="bg-gradient-to-br from-sky-50 to-sky-50 p-8 rounded-2xl shadow-lg border border-sky-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-600 rounded-full mb-4">
            <BiSolidGraduation className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Escuela Internacional de Evaluadores de Playas
          </h1>
          <p className="text-sky-600 font-semibold text-lg">
            EIEP • Creada en 2025
          </p>
        </div>

        {/* Descripción principal */}
        <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Un espacio de{" "}
            <span className="font-semibold text-sky-600">
              formación y colaboración
            </span>{" "}
            conformado por estudiantes de posgrado y profesores universitarios
            en disciplinas como las ciencias del mar, la geografía y el turismo.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nuestro objetivo es consolidar una{" "}
            <span className="font-semibold text-sky-600">
              comunidad académica y profesional
            </span>{" "}
            especializada en la gestión de playas, brindando herramientas
            teóricas y prácticas para la evaluación de calidad de estos sistemas
            costeros.
          </p>
        </div>

        {/* Características clave */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-sky-500">
            <div className="flex items-center mb-2">
              <BiBookOpen className="w-5 h-5 text-sky-600 mr-2" />
              <h3 className="font-semibold text-gray-800">
                Formación Integral
              </h3>
            </div>
            <p className="text-gray-600 text-sm">
              Marco metodológico robusto que garantiza objetividad y
              transparencia en las evaluaciones
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-recreation-500">
            <div className="flex items-center mb-2">
              <BiGlobe className="w-5 h-5 text-recreation-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Visión Global</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Referente mundial para 2030 en formación de especialistas en
              gestión de playas
            </p>
          </div>

          <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-protection-500">
            <div className="flex items-center mb-2">
              <BiAward className="w-5 h-5 text-protection-600 mr-2" />
              <h3 className="font-semibold text-gray-800">Sostenibilidad</h3>
            </div>
            <p className="text-gray-600 text-sm">
              Compromiso con la protección de ecosistemas costeros y estándares
              internacionales
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center">
          <div className="inline-flex items-center bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-medium">
            <BiCalendar className="w-4 h-4 mr-2" />
            Proyección hacia 2030 como referente global
          </div>
        </div>
      </div>
    </div>
  );
}
