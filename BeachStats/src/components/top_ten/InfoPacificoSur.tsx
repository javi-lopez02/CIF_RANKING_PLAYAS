export default function InfoPacificoSur() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">
        Playas del Pacifico Sur
      </h1>

      {/* Línea punteada decorativa */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full h-0.5 flex items-center">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-gold-500 mx-0.5"
            ></div>
          ))}
        </div>
      </div>

      {/* Subtítulo */}
      <h2 className="text-2xl font-medium text-sky-500 text-center mb-6">
        Mejores playas del Pacifico Sur
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          Las playas del Pacífico Sur Americano son un encuentro con la fuerza
          natural: desde las costas de Panamá hasta la mística Patagonia
          chilena. Son escenarios de recreación para el alma y la aventura,
          donde el oleaje salvaje y los paisajes volcánicos despiertan el
          asombro.
        </p>

        <p>
          Estas playas no solo ofrecen belleza y ocio; también son espacios donde
          florecen esfuerzos para proteger dunas, recuperar hábitats y
          garantizar la salud de los ecosistemas. Así, el Pacífico Sur Americano
          nos enseña que disfrutar de las costas implica también cuidarlas con
          respeto y compromiso.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
