export default function EvaluationProccess() {
  return (
    <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
      {/* Main content */}
      <div className="flex gap-8">
        <div className="w-full text-justify">
          <div className="space-y-6 text-gray-700">
            <p className="mb-4">
              El marco de priorización está dividido en las etapas
              esquematizadas en la figura de abajo.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Primera Etapa{" "}
              </h2>
              <p className="mb-4">
                La primera etapa es el registro de los evaluadores. Esa etapa
                busca crear el perfil de las personas interesadas en convertirse
                en evaluadores del ranking. Asimismo, cada evaluador debe
                identificar las playas que desea trabajar y su experiencia
                particular en ellas. Esos datos son utilizados para crear el{" "}
                <strong>Índice de Credibilidad</strong> del evaluador.
              </p>
            </div>

            <div className="border-t border-gold-500 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Segunda Etapa{" "}
              </h2>
              <p className="mb-4">
                La segunda etapa es la recopilación de informaciones acerca de
                cada playa, incluyendo visitas físicas o virtuales, lectura de
                publicaciones científicas, gubernamentales o de divulgación,
                resultados de proyectos, entre otros. Esa etapa es personal y
                debe reflejar el conocimiento general sobre el comportamiento de
                la playa a lo largo del tiempo. En general, se espera que cada
                evaluador actualice previamente su experiencia y conocimiento en
                los 20 criterios de evaluación.
              </p>
            </div>

            <div className="border-t border-gold-500 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Tercera Etapa{" "}
              </h2>{" "}
              <p className="mb-4">
                Como tercer paso, se debe puntuar cada criterio, utilizando el
                formulario electrónico que se coloca a disposición por el equipo
                coordinador del ranking. En ese formulario, el evaluador debe
                seleccionar la opción que mejor describe el estado de cada
                indicador en su playa. Al seleccionar una opción en el
                formulario, se puntúa cada categoría de la priorización. Al
                final de su evaluación, los valores asignados son enviados al
                equipo coordinador por la plataforma, para su procesamiento. Las
                ecuaciones utilizadas para calcular el valor de calidad global y
                el desempeño individual de cada playa por dominio están
                descritos con detalle en Oliveira (2022).
              </p>
            </div>

            <p className="mb-6">
              Cerrado el período de aplicación, todas las playas evaluadas van a
              ser analizadas, los gráficos y tablas con los resultados son
              generados para divulgación y se publica el reporte de resultados.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
