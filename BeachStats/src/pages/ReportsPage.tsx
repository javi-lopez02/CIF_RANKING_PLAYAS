import React from "react";
import { BiCalendar, BiFile } from "react-icons/bi";
import ReportCard from "../components/report/ReportCard";
import { Link } from "react-router-dom";

interface ReportCardProps {
  imageUrl: string;
  downloadUrl: string;
  fileName: string;
  language: string;
}

interface RankingReportsPageProps {
  reports?: ReportCardProps[];
}

const RankingReportsPage: React.FC<RankingReportsPageProps> = ({
  reports = [
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2024/06/Captura-de-pantalla-2024-06-08-032524-416x601.png",
      downloadUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2024/06/Reporte_Ranking2023_final-1.pdf",
      fileName: "Ranking Mejores Playas 2023",
      language: "Español",
    },
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2024/06/Captura-de-pantalla-2024-06-08-032620-416x602.png",
      downloadUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2024/06/reporte_ranking_2024.pdf",
      fileName: "Ranking Mejores Playas 2024",
      language: "Español",
    },
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2024/06/relatorio-416x599.png",
      downloadUrl: "/downloads/ranking-playas-caribe-2024.pdf",
      fileName: "Ranking Melhores Praias 2024",
      language: "Portugues",
    },
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/ES_Reporte_Ranking_2025.png",
      downloadUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/ES_Reporte_Ranking_2025.pdf",
      fileName: "Ranking Mejores Playas 2025",
      language: "Español",
    },
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PT_Relatorio_Ranking_2025.png",
      downloadUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/PT_Relatorio_Ranking_2025.pdf",
      fileName: "Ranking Melhores Praias 2025",
      language: "Portugues",
    },
    {
      imageUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/EN_Relatorio_Ranking_2025.png",
      downloadUrl:
        "https://rankingmejoresplayas.com/wp-content/uploads/2025/06/EN_Relatorio_Ranking_2025.pdf",
      fileName: "Best Beaches Ranking 2025",
      language: "English",
    },
  ],
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-sky-900 via-sky-800 to-sky-800 text-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-full p-4">
                <BiFile className="w-12 h-12 text-sky-200" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-sky-200 bg-clip-text text-transparent">
              Reportes de Ranking
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto leading-relaxed">
              Mejores Playas del Mundo
            </p>
          </div>
        </div>
      </div>

      {/* Introducción */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <BiCalendar className="w-8 h-8 text-sky-600 mr-3" />
            <h2 className="text-3xl font-bold text-gray-800">
              Descargas de Reportes
            </h2>
          </div>

          <div className="prose max-w-none text-gray-600 leading-relaxed">
            <p className="text-lg mb-4 text-justify">
              Accede a nuestros reportes completos del ranking de las mejores
              playas del mundo desde el año 2023. Cada reporte contiene análisis
              detallados, metodología de evaluación, criterios de calificación y
              las clasificaciones oficiales de las playas más destacadas a nivel
              global.
            </p>

            <p className="text-base mb-4 text-justify">
              Nuestros reportes incluyen información sobre las cuatro
              dimensiones de la gestion de playas. Todos los documentos están
              disponibles en formato PDF para su descarga gratuita.
            </p>

            <div className="bg-sky-50 border-l-4 border-sky-500 p-4 my-6 rounded-r-lg">
              <p className="text-sky-800 font-medium">
                <strong>Importante:</strong> Los reportes se actualizan
                anualmente con nuevas evaluaciones y rankings. Asegúrate de
                descargar la versión más reciente para obtener la información
                más actualizada.
              </p>
            </div>
          </div>
        </div>

        {/* Grid de reportes */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            Reportes Disponibles ({reports.length})
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <ReportCard
                key={index}
                imageUrl={report.imageUrl}
                downloadUrl={report.downloadUrl}
                fileName={report.fileName}
                language={report.language}
              />
            ))}
          </div>
        </div>

        {/* Información adicional */}
        <div className="bg-gradient-to-r from-gray-50 to-sky-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            ¿Necesitas más información?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Si tienes preguntas sobre nuestros reportes o necesitas acceso a
            datos específicos, no dudes en contactarnos. Nuestro equipo estará
            encantado de ayudarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={"mailto:coordinacion@rankingmejoresplayas.com"}
              className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RankingReportsPage;
