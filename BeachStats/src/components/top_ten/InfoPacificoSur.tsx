export default function InfoPacificoSur() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky mb-6">Playas del Pacifico Sur</h1>

      {/* Línea punteada decorativa */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full h-0.5 flex items-center">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gold mx-0.5"></div>
          ))}
        </div>
      </div>

      {/* Subtítulo */}
      <h2 className="text-2xl font-medium text-sky text-center mb-6">
        Mejores playas del Pacifico Sur
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          El Pacífico Sur, una vasta extensión oceánica que se extiende desde el
          trópico de Capricornio hasta las heladas costas de la Antártida,
          presenta un escenario desafiante para la gestión sostenible de playas
          en un mosaico de países como Perú, Colombia, Chile, Ecuador.
        </p>

        <p>
          Desde Australia y Nueva Zelanda hasta las islas del Pacífico como
          Fiyi, Samoa y Tonga, la gestión sostenible de playas en el Pacífico
          Sur debe considerar las características únicas de cada país. La
          erosión costera, la contaminación marina y el impacto del turismo son
          algunos de los desafíos comunes que enfrentan las naciones de la
          región, pero cada uno presenta sus propias complejidades y requiere
          soluciones específicas.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark"></div>
      </div>
    </div>
  );
}
