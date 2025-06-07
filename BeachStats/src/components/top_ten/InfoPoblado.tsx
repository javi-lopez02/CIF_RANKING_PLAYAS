export default function InfoPoblado() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">
        Playas de Poblado
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
        Mejores playas de Poblado
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          Las playas de poblado nos invitan a descubrir la calidez de las
          comunidades costeras. Son espacios en los que conviven residentes y
          visitantes, generando un ambiente único y auténtico. Aquí, la
          interacción social y el respeto a las costumbres locales hacen que la
          experiencia de playa sea más cercana y enriquecedora.
        </p>
        <p>
          El Ranking de Mejores Playas destaca estas joyas, resaltando cómo el
          equilibrio entre la vida diaria de los pobladores y la llegada de
          turistas define su calidad y sostenibilidad. El papel de cada
          visitante es esencial: respetar las tradiciones, apoyar las
          iniciativas locales y actúar con empatía. La experiencia se enriquece
          cuando somos parte de la comunidad costera que hace de estas playas un
          verdadero hogar.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
