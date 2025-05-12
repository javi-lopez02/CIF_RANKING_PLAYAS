export default function MediaCoverage() {
  // Lista de medios organizados en filas
  const mediaLogos = [
    // Primera fila
    [
      { name: 'Bloomberg', opacity: 0.6 },
      { name: 'Miami Herald', opacity: 0.7 },
      { name: 'Daily Mail', opacity: 0.65 },
      { name: 'CNN', opacity: 0.7 },
      { name: 'The Australian', opacity: 0.6 }
    ],
    // Segunda fila
    [
      { name: 'The Sun', opacity: 0.65 },
      { name: 'Cosmopolitan', opacity: 0.7 },
      { name: 'Thrillist', opacity: 0.65 },
      { name: 'Chicago Tribune', opacity: 0.7 },
      { name: 'MSN', opacity: 0.6 }
    ],
    // Tercera fila
    [
      { name: 'Newsweek', opacity: 0.65 },
      { name: 'Canada.com', opacity: 0.6 },
      { name: 'Sydney Morning Herald', opacity: 0.7 },
      { name: 'Independent', opacity: 0.65 },
      { name: 'Time Out', opacity: 0.6 }
    ]
  ];

  return (
    <div className="w-full py-4 px-4 ">
      <div className="max-w-5xl mx-auto text-center bg-gray-50 p-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">MEDIA COVERAGE</h2>
        <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">COVERAGE OF OUR LIST ACROSS THE WORLD</p>
        
        <div className="w-full space-y-4">
          {mediaLogos.map((row, rowIndex) => (
            <div key={rowIndex} className="flex flex-wrap justify-between    items-center">
              {row.map((media, mediaIndex) => (
                <div 
                  key={mediaIndex}
                  className="px-6 py-2 flex items-center justify-center"
                  style={{ opacity: media.opacity }}
                >
                  {/* Cada logo sería una imagen real en producción */}
                  <div className="w-24 h-8 flex items-center justify-center">
                    <span className="text-gray-500 font-medium">{media.name}</span>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}