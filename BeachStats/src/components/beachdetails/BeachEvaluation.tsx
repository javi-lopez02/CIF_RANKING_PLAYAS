import { useState } from 'react';
import { SectionTitle } from './SectionTitle';
import { BiSearch } from 'react-icons/bi';

export default function BeachEvaluation() {
  const [rating] = useState(93);
  
  // Puntuaciones generales
  const generalScores = [
    { name: "General", value: 0.928 },
    { name: "Recreación", value: 0.35 },
    { name: "Protección", value: 0.16 },
    { name: "Conservación", value: 0.13 },
    { name: "Sanitario", value: 0.29 },
  ];

  // Rankings
  const rankings = [
    { name: "General", value: "#4" },
    { name: "País", value: "#3" },
    { name: "Región", value: "#3" },
    { name: "Tipo de Playa", value: "#4" }
  ];
  
  return (
    <div className="flex flex-col rounded-lg border-1 w-full">
      <SectionTitle icon={BiSearch} text='Evaluacion de la Playa' ></SectionTitle>
      
      <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-gray-700 font-medium text-lg">Varadero</h3>
          <h4 className="text-sm text-gray-500">(Hotel Internacional)</h4>
        </div>
        <div className="flex items-center justify-center bg-sky border-2 border-gold rounded-full w-20 h-20">
          <span className="text-3xl font-bold text-white">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-medium text-gray-700 mb-2">Puntuación</h3>
        <div className="space-y-2 mb-6">
          {generalScores.map((score, idx) => (
            <div key={idx} className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-600">{score.name}:</span>
              <span className="text-gray-800 font-medium">{score.value.toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <h3 className="font-medium text-gray-700 mb-2">Posición en el Ranking</h3>
        <div className="space-y-2">
          {rankings.map((rank, idx) => (
            <div key={idx} className="flex justify-between py-1 border-b border-gray-100">
              <span className="text-gray-600">{rank.name}:</span>
              <span className="text-gray-800 font-medium">{rank.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}