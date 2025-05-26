import { useState } from 'react';

export default function RankingReport() {
  const [activeReport, setActiveReport] = useState('2023');
  
  return (
    <div className="flex flex-col lg:flex-row border border-gray-300 rounded-lg overflow-hidden max-w-6xl mx-auto">
      <div className="p-6 flex flex-col justify-between lg:w-1/2">
        <div>
          <h2 className="text-2xl font-bold font-sunbone text-gray-800 mb-1">
            LAS MEJORES PLAYAS PARA <br />
            LOS VERDADEROS AMANTES <br />
            DE LAS PLAYAS 💕
          </h2>
          
          <p className="text-sm font-lato text-justify text-gray-700 mt-4">
            El ranking de mejores playas de este sitio web es el entorno ideal 
            para conocer las playas más hermosas desde lo visual, pero
            también desde la calidad del agua, la arena, sus 
            condiciones perfectas, y su compromiso con la protección y
            preservación de los ecosistemas costeros. A través de una
            plataforma científica, se evalúa cada destino costero utilizando 
            una mirada integral que va más allá del turismo, promoviendo playas
            auténticas y seguras para todos. Te invitamos a conocer las
            mejores playas del mundo y descubre por qué estas
            zonas son las mejores playas según criterios técnicos y ambientales
            fundamentados.
          </p>
        </div>
        
        <div className="flex space-x-2 font-lato mt-6">
          {['2023', '2024', '2025'].map((year) => (
            <button
              key={year}
              onClick={() => setActiveReport(year)}
              className={`px-4 py-1 border text-xs uppercase rounded-sm ${
                activeReport === year 
                  ? 'bg-navy-500 text-white border-navy-500' 
                  : 'bg-white text-navy-500 border-navy-500 hover:bg-gray-100'
              }`}
            >
              Reporte {year}
            </button>
          ))}
        </div>
      </div>
      
      <div className="lg:w-1/2">
        <img 
          src="https://www.fundacionaquae.org/wp-content/uploads/2019/09/cook2-1.jpg" 
          alt="Hermosa playa con arena dorada y aguas cristalinas" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}