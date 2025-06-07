export default function InfoRural() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">Playas Rurales</h1>

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
        Mejores playas Rurales
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          En las playas rurales se respira la tranquilidad de lo auténtico:
          arenas casi vírgenes, paisajes agrícolas cercanos y una atmósfera
          donde el ritmo de la naturaleza es el protagonista. Son espacios menos
          urbanizados y con poca infraestructura, lo que permite a los
          visitantes una conexión más íntima con el entorno.
        </p>
        <p>
          El Ranking de Mejores Playas clasifica cuidadosamente estas playas,
          considerando su fragilidad y la necesidad de proteger su esencia. Al
          visitarlas, la responsabilidad es aún mayor: viajar con bajo impacto,
          llevar consigo lo que se trae y respetar los sonidos y silencios del
          lugar. Cada acción consciente mantiene viva la magia de estas costas
          rurales.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
