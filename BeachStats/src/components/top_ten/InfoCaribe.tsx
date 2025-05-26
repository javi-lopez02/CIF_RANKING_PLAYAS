export default function InfoCaribe() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">Playas del Caribe</h1>

      {/* Línea punteada decorativa */}
      <div className="w-full flex justify-center mb-8">
        <div className="w-full h-0.5 flex items-center">
          {[...Array(100)].map((_, i) => (
            <div key={i} className="h-1 w-1 rounded-full bg-gold-500 mx-0.5"></div>
          ))}
        </div>
      </div>

      {/* Subtítulo */}
      <h2 className="text-2xl font-medium text-sky-500 text-center mb-6">
        Mejores playas del Caribe
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          El Caribe, se extiende desde el sureste del Golfo de México hasta el
          norte de Sudamérica. Esta región enmarcada por el océano Atlántico y
          el Mar Caribe, comprende un mosaico de naciones y territorios
          insulares con una rica historia y cultura.
        </p>

        <p>
          Las Antillas que conforman el corazón del Caribe tiene entre sus islas
          mayores a Cuba, La Española, Jamaica y Puerto Rico, mientras que las
          Antillas Menores, como Barbados, Trinidad y Tobago y las Islas
          Vírgenes.
        </p>

        <p>
          El Caribe continental, por su parte, abraza las costas de países como
          Colombia, Venezuela, Panamá, Costa Rica, Nicaragua, Honduras, Belice y
          México por el Atlántico.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
