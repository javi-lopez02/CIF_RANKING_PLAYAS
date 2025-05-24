export default function InfoPacificoNorte() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky mb-6">Playas del Pacifico Norte</h1>

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
        Mejores playas del Pacifico Norte
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          El Pacífico Norte, una extensión colosal de aguas azules que se
          extiende desde el Ártico hasta los trópicos, representa la porción
          septentrional del océano Pacífico. Esta región, cuna de una rica
          biodiversidad y de crucial importancia para el clima global, se
          distingue por sus marcados contrastes geográficos y climáticos.
        </p>

        <p>
          Desde las gélidas costas de Alaska y Siberia hasta las cálidas aguas
          tropicales de México y Centroamérica, el Pacífico Norte despliega un
          mosaico de paisajes marinos y terrestres. Imponentes cordilleras se
          yerguen junto a fértiles llanuras costeras, mientras que islas
          volcánicas y atolones de coral salpican la superficie del océano.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark"></div>
      </div>
    </div>
  );
}
