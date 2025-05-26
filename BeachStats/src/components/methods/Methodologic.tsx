export default function Methodologic() {
  return (
    <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
      {/* Main content */}
      <div className="flex gap-8">
        <div className="w-full text-justify">
          <div className="space-y-6 text-gray-700">
            <div>
              <ul className="list-disc ml-6 space-y-4">
                <li>
                  <p>
                    El análisis de la calidad de las playas se basa en 4
                    dimensiones y 20 categorías. Cada categoría se mide mediante
                    indicadores, que se puntúan en una escala de 1 a 5, teniendo
                    en cuenta la gestión y la sostenibilidad. Las playas tienen
                    puntuaciones para diferenciar entre tipos de playas (urbana,
                    rural o de pueblo).
                  </p>
                </li>
                <li>
                  <p>
                    La inclusión de playas en el ranking depende de la
                    disponibilidad de un evaluador con conocimiento de la
                    región. Si su playa favorita aún no está incluida, es porque
                    todavía no disponemos de un evaluador cualificado para
                    evaluarla.
                  </p>
                </li>
                <li>
                  <p className="font-medium">
                    Los números en rojo representan el Índice de Calidad de la
                    Playa obtenido para cada playa evaluada, que oscila entre 0
                    y 1, donde los valores más próximos a 1 indican que la playa
                    evaluada era de mayor calidad teniendo en cuenta las cuatro
                    dimensiones: recreación (amarillo), protección (rosa),
                    conservación (verde) y saneamiento (azul). El borde hace
                    referencia al tipo de playa: gris para la urbana, naranja
                    para poblado y verde para la rural.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
