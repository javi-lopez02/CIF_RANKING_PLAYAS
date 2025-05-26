export default function Usuarios() {
  return (
    <div className="max-h-screen max-w-6xl mx-auto w-full font-sans text-sm">
      {/* Main content */}
      <div className="flex gap-8">
        <div className="w-full text-justify">
          <div className="space-y-6 text-gray-700">
            <p className="mb-4">
              Diferentes lectores pueden beneficiarse del uso del marco de
              maneras distintas.
            </p>

            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Los gestores
              </h2>
              <p className="mb-4">
                Pueden examinar los resultados individuales de su playa para
                identificar las zonas débiles que exigen gestión y así poner
                acciones direccionadas a esas áreas, con el objetivo de mejorar
                su puntuación y subir su posición en el ranking.
              </p>
            </div>

            <div className="border-t border-gold-500 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Los turistas{" "}
              </h2>
              <p className="mb-4">
                Pueden utilizar la tabla de mejores playas para decidir su
                próximo destino de forma confiable, o usar los gráficos de
                desempeño individual para seleccionar la playa que se adapte a
                sus necesidades (una playa con buen acceso y seguridad para los
                niños, por ejemplo).
              </p>
            </div>

            <div className="border-t border-gold-500 pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                La prensa{" "}
              </h2>{" "}
              <p className="mb-4">
                Puede usar el contenido del marco para crear materiales
                turísticos cómo guías de mejores playas, folletos y posters. La
                industria turística también se beneficiará con el marco ya que
                la promoción del ranking puede atraer los turistas para su
                región, potenciando el turismo y creando más oportunidades para
                la prestación de servicios.
              </p>
            </div>

            <div className="border-t pt-6">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Los hoteles{" "}
              </h2>{" "}
              <p className="mb-4">
                Pueden utilizar el resultado para captar más huéspedes, mientras
                la oferta de servicios puede aumentar, generando nuevos puestos
                de trabajo e impulsando la economía local.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
