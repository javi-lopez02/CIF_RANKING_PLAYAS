export default function HowToBeExpert() {
  return (
    <div className="w-full">
      {/* Título principal */}
      <h2 className="text-center font-sunbone font-bold text-lg mb-4">CÓMO SER EVALUADOR DEL RANKING</h2>
      
      {/* Contenedor de los tres paneles */}
      <div className="flex flex-row w-full justify-between p-4">
        {/* Panel 1: Logo */}
        <div className="w-1/4 px-1">
          <img 
            src="/curso_movil.png" 
            alt="Logo Mejores Playas" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Panel 2: Información */}
        <div className="w-1/4 px-1">
          <img 
            src="/curso_movil2.png" 
            alt="Información de registro" 
            className="w-full h-auto"
          />
        </div>
        
        {/* Panel 3: Beneficios */}
        <div className="w-1/4 px-1">
          <img 
            src="/curso_movil3.png" 
            alt="Beneficios y descarga" 
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}