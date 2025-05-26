export default function InfoAtlanticoSur() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">
        Playas del Atlantico Sur
      </h1>

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
        Mejores playas del Atlantico Sur
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          El Atlántico Sur se extiende desde las costas meridionales de África
          hasta el continente antártico, abarcando islas como las Malvinas y
          Georgias del Sur, el extremo sur de Sudamérica y la porción austral
          del océano Atlántico. Esta región se caracteriza por su gran
          diversidad geográfica y climática, con zonas templadas, subantárticas
          y antárticas, lo que se refleja en su rica biodiversidad marina y
          terrestre.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
