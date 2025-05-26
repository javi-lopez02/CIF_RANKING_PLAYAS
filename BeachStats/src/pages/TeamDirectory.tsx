export default function TeamDirectory() {
  const coordinators = [
    {
      name: "Elaine B. de Oliveira",
      institution: "Universidad Federal do Rio Grande (UFRGS)",
      email: "elainebd.oliveira@hotmail.com",
    },
    {
      name: "Camilo M. Botero",
      institution:
        "Centro Internacional de Formación en Gestión y Certificación de Playas (CIFPLAYAS) - Grupo de Investigación en Sistemas Costeros",
      email: "playascol@gmail.com",
    },
  ];

  const scientificCouncil = [
    { name: "Ana Maria Faggi", email: "anamfaggi@gmail.com" },
    { name: "Camilo M. Botero", email: "playascol@gmail.com" },
    { name: "Flavia Moraes Lins de Barros", email: "flaviamlb@gmail.com" },
    {
      name: "Gerson Fernandino de Andrade Neto",
      email: "gerson.fernandino@ufrgs.br",
    },
    {
      name: "Gustavo Eugenio Echeverri Jaramillo",
      email: "gustavo.echeverri@gmail.com",
    },
    { name: "José Rodrigues Souza Filho", email: "jrsouzageografia@gmail.com" },
    {
      name: "Juan Alfredo Cabrera Hernández",
      email: "alfredojuan1956@gmail.com",
    },
    { name: "Yunior Ramón Velázquez Labrada", email: "yvlabrada@gmail.com" },
  ];

  const technicalTeam = [
    { name: "Maria A. Botero", email: "coordinacion@cifplayas.org" },
    { name: "Miguel Denis Duardo", email: "migueldenis0208@gmail.com" },
    { name: "Valentina Henao Alvarez", email: "valentina.henaoa@udea.edu.co" },
    { name: "Mario Alejandro Silva", email: "alesilva2310@gmail.com" },
    { name: "Julian David Granados Sanabria", email: "jdgs99@gmail.com" },
    { name: "Neilán Vera Rodríguez", email: "neilanvera99@gmail.com" },
    {
      name: "Luis Ignacio Arteaga Alejo",
      email: "arteagaalejoluisignacio@gmail.com",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col md:flex-row">
      <div className="max-w-5xl mx-auto w-full font-sans text-sm">
        <h1 className="py-4 text-center font-sans font-bold text-dark-700 text-5xl">
          Quienes Somos
        </h1>
        <div className="space-y-8 text-gray-700">
          {/* Coordinadores */}
          <div className="bg-gradient-to-r from-sky-50 to-gold-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-xl font-bold text-navy-800 mb-6 flex items-center">
              <div className="w-2 h-8 bg-sky-500 rounded mr-4"></div>
              Coordinadores
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coordinators.map((coordinator, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border"
                >
                  <h3 className="font-semibold text-gray-800 text-base mb-2">
                    {coordinator.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">
                    {coordinator.institution}
                  </p>
                  <a
                    href={`mailto:${coordinator.email}`}
                    className="inline-flex items-center text-sky-600 hover:text-sky-800 transition-colors text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    {coordinator.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Consejo Científico */}
          <div className="bg-gradient-to-r from-navy-50 to-gold-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-2 h-8 bg-navy-400 rounded mr-4"></div>
              Consejo Científico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scientificCouncil.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">
                    {member.name}
                  </h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-navy-400 hover:text-dark-600 transition-colors text-xs"
                  >
                    <svg
                      className="w-3 h-3 mr-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Equipo Técnico */}
          <div className="bg-gradient-to-r from-recreation-50 to-gold-50 p-6 rounded-lg border border-amber-200">
            <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
              <div className="w-2 h-8 bg-gold-500 rounded mr-4"></div>
              Equipo Técnico
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {technicalTeam.map((member, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                >
                  <h3 className="font-semibold text-gray-800 text-sm mb-2">
                    {member.name}
                  </h3>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center text-gold-600 hover:text-gold-800 transition-colors text-xs"
                  >
                    <svg
                      className="w-3 h-3 mr-1 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <span className="truncate">{member.email}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Información de contacto */}
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              Para consultas generales sobre el proyecto, contacte a los
              coordinadores principales.
            </p>
          </div>
        </div>
      </div>

      {/* Sección de Google Anuncios */}
      <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
        <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
          Este es el sitio donde van los anuncios de Google
        </div>
      </div>
    </div>
  );
}
