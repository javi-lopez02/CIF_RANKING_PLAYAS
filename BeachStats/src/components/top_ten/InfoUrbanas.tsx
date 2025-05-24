export default function InfoUrbanas() {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans">
      {/* Título principal */}
      <h1 className="text-4xl font-light text-sky mb-6">Playas Urbanas</h1>

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
        Mejores playas Urbanas
      </h2>

      {/* Párrafos informativos */}
      <div className="space-y-4 text-gray-600 text-sm md:text-base text-justify leading-relaxed">
        <p> 
          Situada dentro o junto a la zona urbana y, por lo general, abiertas
          libremente al público; Servicios públicos bien establecidos, como
          escuelas primarias, centros religiosos, bancos, oficinas de correos,
          cibercafés y un distrito comercial central bien definido; Actividades
          comerciales como la pesca, navegación, puertos y marinas; Acceso libre
          y fácil a la playa.
        </p>
       </div>

      {/* Línea divisoria */}
      <div className="w-full flex justify-center mt-10">
        <div className="w-3/4 h-px bg-dark"></div>
      </div>
    </div>
  );
}
