export default function CreditibilyIndex() {
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
                    El Índice de Credibilidad tiene como objetivo demostrar la
                    reputación del evaluador y la fiabilidad de la evaluación
                    realizada. Este valor se calcula de forma individual por
                    playa. En consecuencia, un mismo evaluador puede tener
                    índices distintos para playas diferentes, según su
                    experticia y experiencias en cada una de ellas. El índice
                    consta de un conjunto de cinco criterios
                  </p>
                </li>
              </ul>

              <ol className="list-decimal ml-8 mt-4 space-y-4">
                <li>
                  <strong>Nivel de estudios</strong>, desde educación formal de
                  pregrado y/o postgrado, hasta cursos especializados como los
                  ofrecidos por CIFPLAYAS.
                </li>
                <li>
                  <strong>Última visita a la playa</strong>, en periodos de
                  tiempo que van desde haber visitado la playa específicamente
                  para la evaluación, a no haberla visitado sino una vez en el
                  último año.
                </li>
                <li>
                  <strong>Experiencia previa</strong> puntual y certificada en
                  la playa que se va a analizar. El tipo de experiencia puede
                  incluir artículos, proyectos, consultorías, campañas
                  ciudadanas, certificación, textos escritos, aparición en
                  prensa, materiales audiovisuales, e/o contacto con
                  intervinientes de la playa;
                </li>
                <li>
                  <strong>Años de experiencia</strong> en temas ligados a la
                  gestión de playas, en cualquiera de las disciplinas o roles
                  que puede tener un gerente de playas.
                </li>
                <li>
                  <strong>Entrenamiento en el ranking</strong>, incluido la
                  lectura del manual disponible y la participación en reuniones,
                  pero sobre todo haber completado el curso móvil de nivel
                  experto del Ranking, en la plataforma de CIFPLAYAS.
                </li>
              </ol>
            </div>

            <div>
              <ul className="list-disc ml-6 space-y-4">
                <li>
                  <p>
                    El cumplimiento de cada criterio se califica con una
                    puntuación de 1 hasta 5, conforme a la tabla de abajo. A
                    continuación, los valores se suman y se normalizan
                    dividiendo el valor obtenido por el valor máximo (25). El
                    valor final del índice se divulga en una escala de 0 a 1.
                    Cuanto más se acerque a 1, mayor será el índice de
                    credibilidad del evaluador para la playa estudiada y más
                    fiable será el resultado de su evaluación.
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
