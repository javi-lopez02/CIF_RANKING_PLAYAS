export default function InfoEnclave() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">Playas Enclave</h1>

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
        Mejores playas Enclave
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          Las playas enclave se destacan por su singularidad: enclavadas en
          paisajes opuestos a su entorno, ofrecen experiencias únicas e
          inesperadas. Imagina una playa de naturaleza prístina dentro de una
          ciudad bulliciosa o un cómodo resort frente a una costa salvaje: son
          contrastes que despiertan la curiosidad y redefinen la relación entre
          desarrollo económico y conservación ambiental.
        </p>
        <p>
          El Ranking de Mejores Playas evalúa estos enclaves con precisión, pues
          son espacios donde la armonía o el desbalance entre lo construido y lo
          natural es evidente. Para el visitante, significa ser aún más
          consciente: el respeto por los espacios comunes, el cuidado de los
          recursos y la sensibilidad hacia las comunidades locales son claves
          para que estas playas sigan siendo una fusión ejemplar de belleza y
          diversidad.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
