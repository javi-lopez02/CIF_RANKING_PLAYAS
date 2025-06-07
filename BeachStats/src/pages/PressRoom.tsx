import React from "react";
import PressRoomPagination from "../components/pressroom/PressRoomPagination";
import PressRoomCard from "../components/pressroom/PressRoomCard";
import useMedia from "../customHooks/useMedia";
import { Media } from "../types";
import { Spinner } from "@heroui/spinner";

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
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-5xl font-bold mb-6 text-center text-dark-700">Sala de Prensa</h2>
        <p className="text-md mb-4 text-justify">
          ¿Eres periodista o miembro de los medios de comunicación? Estaremos
          encantados de ayudarte con toda la información que necesites sobre
          nuestra marca, iniciativas, eventos o materiales visuales.
        </p>
        <p className="text-md mb-4 text-justify">
          Para cualquier consulta relacionada con prensa, entrevistas, notas
          oficiales o para solicitar nuestro Kit de Medios, por favor ponte en
          contacto con:
        </p>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <p className="text-lg font-semibold">[Nombre del contacto]</p>
          <p className="text-gray-700">
            Directora de Relaciones Públicas y Comunicaciones
          </p>
          <p className="mt-2">
            ✉️{" "}
            <a
              href="mailto:correo@ejemplo.com"
              className="text-sky-500 hover:underline"
            >
              [correo@ejemplo.com]
            </a>
          </p>
        </div>
        <p className="text-md mt-6">
          Estaremos encantados de colaborar contigo y proporcionarte todo lo
          necesario para facilitar tu cobertura.
        </p>
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
