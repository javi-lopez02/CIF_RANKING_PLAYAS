export default function MathExample() {
    return (
      <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
        {/* Main content */}
        <div className="flex gap-8">
          <div className="w-full text-justify">
            <div className="space-y-6 text-gray-700">  
              <div>
                <ul className="list-disc ml-6 space-y-4">
                  <li>
                    <p className="font-bold italic">Evaluador 1: José</p>
                    <p>
                      José es licenciado en Geografía, máster y doctor en Gestión
                      Ambiental. José evalúa la playa de Balela, donde trabaja
                      desde hace 30 años y que visita todos los meses. Tiene
                      proyectos de investigación desarrollados en esa región,
                      publicó artículos científicos y participó en la producción
                      de materiales audiovisuales sobre educación ambiental en esa
                      playa. Además, tiene acceso a una amplia red de contactos en
                      la playa. Por último, José ha participado en todas las fases
                      de la formación sobre el marco de priorización.
                    </p>
                    <p className="mt-2">
                      En ese ejemplo, José ha puntuado cada criterio con la máxima
                      puntuación. Al normalizar el valor, el índice de
                      credibilidad de José para la playa de Balela es igual a 1.
                      La atribución de la puntuación más alta es un reflejo de sus
                      conocimientos y años de experiencia en esta playa puntual.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold italic">Evaluador 2: María</p>
                    <p>
                      María es oceanógrafa y está haciendo un máster en
                      geociencias. María también va a evaluar la playa de Balela,
                      que conoce desde hace 10 años. La última vez que María
                      visitó la playa fue hace un año y no conoce a mucha gente
                      allí que pueda darle apoyo a distancia. Tiene un artículo
                      científico publicado, pero ningún otro material. Por último,
                      ha participado en todas las fases de formación. En ese
                      ejemplo, María obtuvo un índice de credibilidad para la
                      playa de Balela de 0,6.
                    </p>
                  </li>
                  <li>
                    <p className="font-bold italic">Evaluador 3: Juan</p>
                    <p>
                      Juan es un estudiante de oceanografía que está evaluando la
                      playa de Balela. Está empezando su vida profesional, por lo
                      que tiene muy poca experiencia trabajando con playas y no
                      tiene ningún tipo de material publicado sobre el lugar. Juan
                      ha visitado la playa esta semana y ha realizado todo el
                      curso para convertirse en evaluador.
                    </p>
                    <p className="mt-2">
                      Sumando los puntos, Juan obtuvo 13 sobre 25, lo que
                      significa que su índice de credibilidad es igual a 0,5.
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
  