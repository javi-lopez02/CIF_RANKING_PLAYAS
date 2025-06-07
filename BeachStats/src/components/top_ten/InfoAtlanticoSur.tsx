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
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-gold-500 mx-0.5"
            ></div>
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
          Las playas del Atlántico Sur Americano despliegan paisajes que invitan
          al asombro: desde los arenales infinitos de Brasil hasta los
          acantilados de la Patagonia. Aquí, la recreación y la contemplación
          encuentran su lugar en la vastedad del océano y el susurro de los
          vientos del sur.
        </p>

        <p>
          Cada playa es también un punto clave para la protección costera, el
          equilibrio ecosistémico y la salud ambiental. Iniciativas de
          restauración de dunas y manglares convierten a estas costas en un
          laboratorio de sostenibilidad, recordándonos que la belleza y la
          responsabilidad pueden caminar juntas en armonía.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
