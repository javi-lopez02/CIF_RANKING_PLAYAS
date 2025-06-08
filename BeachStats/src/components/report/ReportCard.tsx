import { BiDownload, BiFile } from "react-icons/bi";

interface ReportCardProps {
  imageUrl: string;
  downloadUrl: string;
  fileName: string;
  language: string;
}

const ReportCard: React.FC<ReportCardProps> = ({
  imageUrl,
  downloadUrl,
  fileName,
  language,
}) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Imagen de portada */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`Portada ${fileName}`}
          className="w-full h-64 object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Contenido */}
      <div className="p-6">
        <div className="flex items-center mb-3">
          <BiFile className="w-8 h-8 text-sky-600 mr-2" />
          <div>
            <h3 className="font-semibold text-gray-800 text-md line-clamp-2">
              {fileName}{" "}
              <span className="font-light text-gray-500 text-sm">
                {language}
              </span>
            </h3>
          </div>
        </div>

        {/* Botón de descarga */}
        {language === "Español" && (
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <BiDownload className="w-5 h-5" />
            <span>Descargar Reporte</span>
          </button>
        )}
        {language === "Portugues" && (
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <BiDownload className="w-5 h-5" />
            <span>Baixar Relatório</span>
          </button>
        )}

        {language === "English" && (
          <button
            onClick={handleDownload}
            className="w-full bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white font-medium text-sm py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
          >
            <BiDownload className="w-5 h-5" />
            <span>Download Report</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default ReportCard;
