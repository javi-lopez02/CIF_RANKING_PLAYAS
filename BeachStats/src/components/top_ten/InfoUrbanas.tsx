export default function InfoUrbanas() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky-500 mb-6">Playas Urbanas</h1>

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
        Mejores playas Urbanas
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p>
          Las playas urbanas ofrecen una combinación perfecta entre la comodidad
          de la ciudad y la belleza del litoral. Suelen contar con
          infraestructuras y servicios bien desarrollados, ideales para familias
          y visitantes que buscan accesibilidad y seguridad. Estas playas son el
          reflejo de cómo la convivencia entre el desarrollo urbano y el mar
          puede aportar vitalidad a las comunidades, fomentando tanto la
          recreación como el disfrute responsable.
        </p>
        <p>
          El Ranking de Mejores Playas reconoce que estas áreas enfrentan
          desafíos particulares, como el manejo de multitudes y la calidad
          sanitaria. Por ello, diferencia las playas urbanas de otros tipos y
          recalca la importancia de cuidar cada rincón: depositar la basura en
          su lugar, respetar las zonas de seguridad y contribuir al
          mantenimiento de la belleza y la salud del entorno. ¡Cada visitante
          puede ayudar a que estas playas sigan siendo espacios vibrantes y
          acogedores!
        </p>
      </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark-700"></div>
      </div>
    </div>
  );
}
