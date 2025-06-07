export default function InfoNatural() {
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
      <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
        <p>
          Las playas naturales son verdaderos santuarios de geo y biodiversidad,
          donde la vida marina y terrestre se expresa en su máxima pureza, entre
          geoformas esculpidas por milenios de interacción entre el mar y la
          tierra. En ellas, no hay construcciones que interfieran con la belleza
          de la costa ni actividades humanas que rompan su equilibrio. Aquí, la
          naturaleza reina y la visita se convierte en una experiencia de
          contemplación y respeto.
        </p>

        <p>
          El Ranking de Mejores Playas valora estas playas como tesoros
          irremplazables, donde la conservación es la prioridad. Los visitantes
          deben entender que cada paso y cada huella cuentan: caminar por
          senderos establecidos, no dejar residuos y disfrutar de la fauna sin
          perturbarla son actos de respeto que aseguran que estas joyas
          naturales sigan siendo testigos de la vida costera por generaciones.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
