export default function InfoMediterraneo() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">
        Playas del Mediterraneo
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
        Mejores playas del Mediterraneo
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
        <p>
          Las playas del Mediterráneo guardan la memoria de civilizaciones
          antiguas y la frescura de los días de verano. Sus arenas doradas y
          aguas tranquilas atraen a quienes buscan relajación, mientras que sus
          calas y acantilados ofrecen espacios únicos para la contemplación y la
          aventura.
        </p>

        <p>
          Estas costas también son testigos de un compromiso creciente con los
          cuatro dominios del ranking: recreación segura y consciente,
          protección de ecosistemas marinos y costeros, resiliencia ante la
          erosión y calidad sanitaria impecable. Así, las playas mediterráneas
          no solo son belleza, sino un ejemplo de equilibrio entre el turismo y
          el cuidado de la naturaleza.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
