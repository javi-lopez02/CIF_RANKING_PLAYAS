export default function InfoCaribe() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">
        Playas del Caribe
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
        Mejores playas del Caribe
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          Las playas del Caribe son un refugio de color y vida: arenas blancas
          que acarician los pies, aguas cristalinas que susurran canciones
          antiguas y palmeras que danzan con la brisa. Cada una ofrece un portal
          para sumergirse en la naturaleza y la cultura, conjugando momentos de
          recreación inolvidables con la promesa de descanso absoluto.
        </p>

        <p>
          En estas costas, el equilibrio entre lo recreativo, lo ecosistémico,
          la protección costera y la salud ambiental es esencial. Las playas del
          Caribe se convierten en escenarios donde la biodiversidad y el
          bienestar humano se entrelazan, mostrando al mundo que es posible
          disfrutar y conservar a la vez.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
