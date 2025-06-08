import React from "react";
import PressRoomPagination from "../components/pressroom/PressRoomPagination";
import PressRoomCard from "../components/pressroom/PressRoomCard";
import useMedia from "../customHooks/useMedia";
import { Media } from "../types";
import { Spinner } from "@heroui/spinner";
import { Link } from "react-router-dom";

// Componente principal
const PressRoom: React.FC = () => {
  const { currentItems, loading, currentPage, totalPages, setCurrentPage } =
    useMedia();

  const handleNewsClick = (item: Media) => {
    console.log("Clicked news item:", item);
    // Aquí puedes manejar la navegación o abrir el artículo
    if (item.url) {
      window.open(item.url, "_blank");
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll hacia arriba cuando cambie la página
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="max-w-full mx-auto bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-br from-sky-600 to-sky-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32"></div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Sala de <span className="text-gold-300">Prensa</span>
          </h1>
          <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            Tu puerta de entrada a toda la información, recursos y contactos que
            necesitas para contar nuestras historias
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-10 relative z-10">
        {/* Introduction Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              ¿Eres periodista o miembro de los medios?
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Estaremos encantados de ayudarte con toda la información que
              necesites sobre nuestra marca, iniciativas, eventos o materiales
              visuales. Para consultas relacionadas con prensa, entrevistas,
              notas oficiales o para solicitar nuestro Kit de Medios, ponte en
              contacto con Agencia Cimbra Creativa, el equipo de comunicaciones
              a cargo del Raking Mejores Playas 2025.
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Primera Empresa */}
            <div className="bg-gradient-to-br from-sky-50 to-conservation-50 rounded-2xl p-8 border border-sky-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-sky-500 to-conservation-600 rounded-full mr-4"></div>
                <div className="flex items-center gap-4 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Ranking Mejores Playas
                  </h3>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img
                      src="/Ranking_logo.png"
                      alt="Logo Ranking Mejores Playas"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sky-600 font-semibold">📧</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <Link
                      to="mailto:comunicaciones@rankingmejoresplayas.com"
                      className="text-sky-600 hover:text-sky-700 hover:underline transition-colors"
                    >
                      comunicaciones@rankingmejoresplayas.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-sky-600 font-semibold">👥</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Departamento</p>
                    <p className="text-gray-600">Equipo Comunicaciones</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Segunda Empresa */}
            <div className="bg-gradient-to-br from-conservation-50 to-pink-50 rounded-2xl p-8 border border-conservation-100 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-conservation-500 to-pink-600 rounded-full mr-4"></div>
                <div className="flex items-center gap-4 flex-1">
                  <h3 className="text-2xl font-bold text-gray-800">
                    Agencia Cimbra Creativa
                  </h3>
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img
                      src="/Logo-Cimbra-Creativa.png"
                      alt="Logo Agencia Cimbra Creativa"
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-conservation-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-conservation-600 font-semibold">
                      📧
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Email</p>
                    <Link
                      to="mailto:migueldenis0208@gmail.com"
                      className="text-conservation-600 hover:text-conservation-700 hover:underline transition-colors"
                    >
                      cimbracreativa@gmail.com
                    </Link>
                  </div>
                </div>

                <div className="flex items-center text-gray-700">
                  <div className="w-10 h-10 bg-conservation-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-conservation-600 font-semibold">
                      👥
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Departamento</p>
                    <p className="text-gray-600">Equipo de Comunicación</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 p-8 bg-gradient-to-r from-gray-50 to-sky-50 rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              ¿Necesitas recursos adicionales?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estaremos encantados de colaborar contigo y proporcionarte todo lo
              necesario para facilitar tu cobertura mediática.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                📸 Kit de Medios
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                📰 Notas de Prensa
              </span>
              <span className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200">
                🎤 Entrevistas
              </span>
            </div>
          </div>
        </div>
      </div>

      {loading && (
        <div className="flex py-16 items-center justify-center">
          <Spinner color="secondary" />
        </div>
      )}
      {!loading && (
        <div className="max-w-6xl space-y-2">
          {currentItems.map((item) => (
            <PressRoomCard
              key={item.id}
              item={item}
              onClick={handleNewsClick}
            />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <PressRoomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default PressRoom;
