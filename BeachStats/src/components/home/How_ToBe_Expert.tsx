import { Link } from "react-router-dom";

export default function How_ToBe_Expert() {
  return (
    <footer className="w-full bg-gradient-to-r from-sky-900 to-sky-800 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Título principal */}
        <div className="text-center mb-8">
          <h2 className="font-sunbone font-bold text-2xl mb-2">
            CÓMO SER EVALUADOR DEL RANKING
          </h2>
          <p className="text-sky-200 text-sm">
            Únete a nuestro programa de evaluadores expertos
          </p>
        </div>

        {/* Contenedor de los tres paneles principales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Panel 1: Logo y Registro */}
          <div className="text-center">
            <Link
              to="https://cifplayas.org/cmep/"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/curso_movil.png"
                alt="Registro como Evaluador"
                className="w-full h-auto mb-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>

          {/* Panel 2: Información del Curso */}
          <div className="text-center">
            <Link
              to="https://cifplayas.org/cmep/"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/curso_movil2.png"
                alt="Curso de Evaluadores"
                className="w-full h-auto mb-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>

          {/* Panel 3: Beneficios y Descarga */}
          <div className="text-center">
            <Link
              to="https://cifplayas.org/cmep/"
              className="block hover:opacity-80 transition-opacity"
            >
              <img
                src="/curso_movil3.png"
                alt="Beneficios del Evaluador"
                className="w-full h-auto mb-3 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              />
            </Link>
          </div>
        </div>

        {/* Sección de enlaces adicionales */}
        <div className="border-t border-sky-700 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            {/* Enlaces principales */}
            <div>
              <h3 className="font-semibold mb-3 text-sky-100">Evaluadores</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="mailto:coordinacion@rankingmejoresplayas.com"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Registro
                  </Link>
                </li>
                <li>
                  <Link
                    to="https://cifplayas.org/cursos/"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Curso Online
                  </Link>
                </li>
                <li>
                  <Link
                    to="/school"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Escuela EIEP
                  </Link>
                </li>
              </ul>
            </div>

            {/* Recursos */}
            <div>
              <h3 className="font-semibold mb-3 text-sky-100">Recursos</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/method"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Metodo de Evaluacion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/method"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Marco de Priorizacion
                  </Link>
                </li>
                <li>
                  <Link
                    to="/method"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Marco de Comunicacion
                  </Link>
                </li>
              </ul>
            </div>

            {/* Información */}
            <div>
              <h3 className="font-semibold mb-3 text-sky-100">Información</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/pressroom"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Sala de Prensa
                  </Link>
                </li>
                <li>
                  <Link
                    to="/method"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Acerca del Ranking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contacto"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            {/* Soporte */}
            <div>
              <h3 className="font-semibold mb-3 text-sky-100">Soporte</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="mailto:coordinacion@rankingmejoreslayas.com"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Centro de Ayuda
                  </Link>
                </li>
                <li>
                  <Link
                    to="mailto:coordinacion@rankingmejoreslayas.com"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Soporte Técnico
                  </Link>
                </li>
                <li>
                  <Link
                    to="/politicas"
                    className="text-sky-200 hover:text-white transition-colors"
                  >
                    Políticas
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright y enlaces legales */}
        <div className="border-t border-sky-700 pt-4 mt-6 text-center text-xs text-sky-300">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <p>&copy; 2025 Ranking de Playas. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
