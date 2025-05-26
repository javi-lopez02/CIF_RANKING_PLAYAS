export default function ComunicationMarc() {
  return (
    <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
      {/* Main content */}
      <div className="flex gap-8">
        <div className="w-full text-justify">
          <div className="space-y-6 text-gray-700">
            {/* Representación Visual */}
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">Representación Gráfica del Marco de Priorización</h2>
              <p className="mb-4">
                Dado que la clasificación en sí no explica por qué una playa en particular se encuentra en una 
                posición específica, es esencial la representación del desempeño general de la playa con un 
                resultado visual, en lugar de un valor numérico. El gráfico puede proporcionar una perspectiva 
                amigable y sencilla de la calidad de la playa en cada dominio, ofreciendo una mejor comunicación 
                para los gestores costeros y los turistas.
              </p>
              
              <p className="mb-4">
                Con ese objetivo en mente, fue creado un gráfico que se inspira en la combinación del resultado 
                visual de dos marcos de sistemas socioecológicos existentes, los «Círculos de sostenibilidad» 
                (James, 2015) y el «Índice de salud de los océanos» (Halpern et al., 2012).
              </p>

              <p className="mb-4">
                La representación gráfica del marco de priorización de playas permite visualizar el desempeño 
                de la playa en cada dominio, facilitando la comunicación e interpretación de los datos. El 
                resultado gráfico permite al usuario comprender por qué la playa ocupa una posición específica 
                en el ranking y ayuda a los gestores a identificar qué categorías podrían mejorarse para elevar su estatus.
              </p>
            </div>

            {/* Sistema de Colores */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Sistema de Colores y Representación</h3>
              <p className="mb-4">
                Se han definido colores para los ámbitos, siendo recurrentes en toda la metodología y siempre 
                representativos de la misma dimensión:
              </p>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="flex items-center space-x-3 p-3 bg-recreation-50 rounded-lg border">
                  <div className="w-4 h-4 bg-recreation-400 rounded-full"></div>
                  <span className="font-medium">Amarillo - Recreación</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-protection-50 rounded-lg border">
                  <div className="w-4 h-4 bg-protection-400 rounded-full"></div>
                  <span className="font-medium">Rosa - Protección</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-conservation-50 rounded-lg border">
                  <div className="w-4 h-4 bg-conservation-400 rounded-full"></div>
                  <span className="font-medium">Verde - Conservación</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-sanitary-50 rounded-lg border">
                  <div className="w-4 h-4 bg-sanitary-400 rounded-full"></div>
                  <span className="font-medium">Azul - Sanitario</span>
                </div>
              </div>

              <p className="mb-4">
                El eje de los gráficos muestra la puntuación normalizada para cada indicador analizado y varía 
                de 0 a 1, siendo uno el mayor valor en el borde exterior (cuanto más lleno está el corte, mejor 
                es el rendimiento de la playa en esta categoría concreta). El valor final de cada playa se muestra 
                en el círculo del centro del gráfico.
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
                <div className="bg-recreation-50 p-4 rounded-lg border-l-4 border-recreation-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Dimensión Recreativa</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>El valor escénico y la capacidad de carga tienen mayor prioridad en las playas rurales y poblado</li>
                    <li>La seguridad se consideró lo más importante en las urbanas</li>
                    <li>Servicios e infraestructura y acceso y aparcamiento tienen un peso más alto para las playas urbanas y más bajo para las rurales</li>
                  </ul>
                </div>

                <div className="bg-conservation-50 p-4 rounded-lg border-l-4 border-conservation-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Dimensión de Conservación</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>La calidad ambiental es la categoría más importante para las playas urbanas</li>
                    <li>El criterio hábitat tiene más peso para las playas rurales</li>
                    <li>Las playas poblado muestran una distribución de peso media entre todos los criterios</li>
                  </ul>
                </div>

                <div className="bg-protection-50 p-4 rounded-lg border-l-4 border-protection-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Dimensión de Protección</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Las playas de poblado tienen ponderación elevada para la disipación sub-aérea y amortiguación de tormentas</li>
                    <li>Vulnerabilidad y riesgo es la categoría más importante para las playas urbanas</li>
                    <li>Las playas rurales son más influenciadas por el criterio de cambios inducidos</li>
                  </ul>
                </div>

                <div className="bg-sanitary-50 p-4 rounded-lg border-l-4 border-sanitary-400">
                  <h4 className="font-semibold text-gray-800 mb-2">Dimensión Sanitaria</h4>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Las playas de poblado tienen ponderación elevada para los criterios de calidad del agua y basura</li>
                    <li>Las playas urbanas son más influenciadas por la contaminación episódica</li>
                    <li>Las playas rurales tienen los criterios de calidad de la arena y basura como los más importantes</li>
                    <li>Las instalaciones y servicios sanitarios tienen la ponderación más baja para todos los tipos de playa, sin embargo, el peso del criterio es mayor en las playas urbanas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Beneficios de la Representación Visual */}
            <div className="border-t border-gold-500 pt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Beneficios de la Representación Visual</h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Proporciona una perspectiva amigable y sencilla de la calidad de la playa en cada dominio</li>
                  <li>Ofrece mejor comunicación para gestores costeros y turistas</li>
                  <li>Permite visualizar el desempeño de la playa en cada dominio</li>
                  <li>Facilita la comunicación e interpretación de los datos</li>
                  <li>Ayuda a comprender por qué la playa ocupa una posición específica en el ranking</li>
                  <li>Asiste a los gestores para identificar qué categorías podrían mejorarse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}