export default function InfoAtlanticoNorte() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky mb-6">
        Playas del Atlantico Norte
      </h1>

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
        Mejores playas del Atlantico Norte
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          El Atlántico Norte, una región geográfica que abarca la porción
          septentrional del océano Atlántico, se extiende desde el Círculo Polar
          Ártico hasta el trópico de Cáncer. Esta zona dinámica y diversa
          alberga una rica variedad de ecosistemas costeros, desde playas de
          arena blanca azotadas por el viento hasta calas rocosas y exuberantes
          marismas. Las costas del Atlántico Norte son hogar de una gran
          cantidad de países, cada uno con sus propias características y
          desafíos para la gestión sostenible de playas.
        </p>

        <p>
          Entre los países que bordean el Atlántico Norte se encuentran:
          <ul className="list-disc pl-6">
            <li>
              Europa:{" "}
              <b>
                Islandia, Noruega, Reino Unido, Irlanda, Francia, España,
                Portugal, Bélgica, Países Bajos, Alemania, Dinamarca, Suecia,
                Finlandia, Estonia, Letonia, Lituania, Polonia
              </b>
            </li>
            <li>
              Norteamérica:{" "}
              <b>Canadá, Groenlandia (Dinamarca), Estados Unidos</b>
            </li>
            <li>
              África:{" "}
              <b>
                Marruecos, Argelia, Túnez, Libia Islas: Islas Feroe (Dinamarca),
                Azores (Portugal), Madeira (Portugal), Islas Canarias (España)
              </b>
            </li>
          </ul>
        </p>

        <p>
          La gestión sostenible de playas en el Atlántico Norte presenta una
          serie de desafíos comunes a todos estos países, como la erosión
          costera, la contaminación marina y el impacto del turismo. Sin
          embargo, cada nación también enfrenta retos específicos relacionados
          con sus características geográficas, socioeconómicas y culturales.
        </p>

        <p>
          Al proteger las playas del Atlántico Norte, podemos preservar su
          belleza natural, garantizar su uso sostenible para las generaciones
          venideras y promover el bienestar de las comunidades costeras que
          dependen de ellas.
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark"></div>
      </div>
    </div>
  );
}
