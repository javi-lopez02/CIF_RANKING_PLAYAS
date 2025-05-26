export default function EvaluationMethod() {
  return (
    <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
      {/* Main content */}
      <div className="flex gap-8">
        <div className="w-full text-justify">
          <div className="space-y-6 text-gray-700">
            {/* Introducción */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Marco de Priorización de Playas</h2>
              <p className="mb-4">
                El «Marco de Priorización de Playas» es una metodología compuesta por indicadores que reconocen 
                las funciones y los servicios ecosistémicos de una playa y se mide mediante un esquema de 
                puntuación que permite realizar comparaciones directas. El marco proporciona una visión global, 
                aborda las deficiencias principales de gestión y destaca los puntos fuertes y débiles de cada playa.
              </p>
              
              <p className="mb-4">
                El resultado gráfico resume una gran cantidad de información a la vez que educa a los usuarios 
                en cuestiones ambientales. Además, el marco puede estandarizar las metodologías de clasificación, 
                reduciendo la subjetividad y permitiendo a los turistas y gestores comparar playas y comprender 
                los criterios utilizados para clasificarlas.
              </p>
            </div>

            {/* Estructura basada en Círculos de Sostenibilidad */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Estructura del Marco</h3>
              <p className="mb-4">
                La estructura del marco de priorización de playas se diseñó basándose en el marco de los 
                «Círculos de sostenibilidad» (James, 2015). Círculos de sostenibilidad es un marco de evaluación, 
                basado en la teoría de los sistemas socioecológicos (SES), para medir la sostenibilidad urbana 
                a través de un enfoque holístico mediante la asignación de puntuaciones a categorías divididas 
                en cuatro dominios.
              </p>
              
              <p className="mb-4">
                Los dominios del marco se adaptaron para reflejar las principales funciones de una playa, 
                defensa costera, recreación y conservación, además de reflejar las condiciones sanitarias. 
                Cada dominio se divide en cinco categorías que incluyen sus principales elementos.
              </p>
            </div>

            {/* Dimensiones del Marco */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Dimensiones del Marco</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión Recreativa</h4>
                  <p>
                    Se refiere a la prestación de servicios e infraestructuras que permiten a los usuarios 
                    de las playas relajarse, divertirse y entretenerse.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión de Protección</h4>
                  <p>
                    Incluye indicadores que evalúan el potencial de la playa para disipar energía y defender 
                    las zonas interiores frente a posibles eventos dañinos. Los criterios identifican 
                    vulnerabilidades y modificaciones antrópicas que pueden dañar la defensa natural de la costa.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión de Conservación</h4>
                  <p>
                    Se refiere a la preservación del ambiente, incluyendo indicadores para medir la biodiversidad, 
                    la calidad ambiental y la gestión de las acciones de conservación.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión Sanitaria</h4>
                  <p>
                    Pretende identificar la presencia y los impactos de la basura y la contaminación.
                  </p>
                </div>
              </div>
            </div>

            {/* Indicadores */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Indicadores</h3>
              <p className="mb-4">
                Cada dominio se divide en cinco categorías, y cada categoría es medida por un número variable 
                de indicadores. Los indicadores son datos o informaciones que permiten conocer, describir, 
                clasificar, comparar o valorar las características y la intensidad de una realidad o para 
                determinar su evolución futura.
              </p>
              
              <p className="mb-4">
                En el ámbito ambiental, los indicadores son una medida cuantitativa del estado de salud del 
                entorno, indicando las presiones, el estado evolutivo y la idoneidad de las medidas políticas. 
                Los indicadores del ranking de playas son expuestos en la figura.
              </p>
            </div>

            {/* Ponderación por Tipo de Playa */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ponderación por Tipo de Playa</h3>
              <p className="mb-4">
                Finalmente, cada tipo de playa tiene una ponderación particular para reflejar la realidad de su gestión:
              </p>

              <div className="space-y-4 ml-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Playas Urbanas</h4>
                  <p>
                    El ámbito recreativo y el sanitario tienen mayor peso. Son conocidas por su desarrollo 
                    y oferta de servicios y comodidades. La dimensión de conservación tiene la ponderación 
                    más baja, ya que están muy modificadas y no se espera que mantengan intactos los elementos naturales.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Playas Rurales</h4>
                  <p>
                    El ámbito de la conservación es más importante. Son conocidas por su naturaleza. 
                    La baja ponderación de los criterios recreativos pretende evitar la modificación 
                    y urbanización de estas playas, protegiendo y manteniendo sus características naturales.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Playas de Poblado</h4>
                  <p>
                    Todos los ámbitos tienen un peso similar. Son la transición entre playas urbanas y rurales, 
                    por lo que se espera que tengan una mezcla de elementos.
                  </p>
                </div>
              </div>
            </div>

            {/* Ponderaciones Específicas por Dimensión */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Ponderaciones Específicas por Dimensión</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión Recreativa</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>El valor escénico y la capacidad de carga tienen mayor prioridad en las playas rurales y poblado</li>
                    <li>La seguridad se consideró lo más importante en las urbanas</li>
                    <li>Servicios e infraestructura y acceso y aparcamiento tienen un peso más alto para las playas urbanas y más bajo para las rurales</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión de Conservación</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>La calidad ambiental es la categoría más importante para las playas urbanas</li>
                    <li>El criterio hábitat tiene más peso para las playas rurales</li>
                    <li>Las playas poblado muestran una distribución de peso media entre todos los criterios</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión de Protección</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Las playas de poblado tienen ponderación elevada para la disipación sub-aérea y amortiguación de tormentas</li>
                    <li>Vulnerabilidad y riesgo es la categoría más importante para las playas urbanas</li>
                    <li>Las playas rurales son más influenciadas por el criterio de cambios inducidos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">Dimensión Sanitaria</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Las playas de poblado tienen ponderación elevada para los criterios de calidad del agua y basura</li>
                    <li>Las playas urbanas son más influenciadas por la contaminación episódica</li>
                    <li>Las playas rurales tienen los criterios de calidad de la arena y basura como los más importantes</li>
                    <li>Las instalaciones y servicios sanitarios tienen la ponderación más baja para todos los tipos de playa, sin embargo, el peso del criterio es mayor en las playas urbanas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}