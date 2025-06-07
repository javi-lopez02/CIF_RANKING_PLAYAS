import { Beach } from "../../types";
import { SectionTitle } from "./SectionTitle";
import { BiSearch } from "react-icons/bi";

interface BeachData {
  beach: Beach;
}

export default function BeachEvaluation({beach}: BeachData) {
  return (
    <div className="flex flex-col rounded-lg border-1 w-full">
      <SectionTitle
        icon={BiSearch}
        text="Evaluacion de la Playa"
      ></SectionTitle>

      {/* <div className="flex items-center justify-between p-4 border-b">
        <div>
          <h3 className="text-gray-700 font-medium text-lg">{beach.name}</h3>
        </div>
        <div className="flex items-center justify-center bg-sky-500 border-2 border-gold-500 rounded-full w-20 h-20">
          <span className="text-3xl font-bold text-white">{beach.bqvScore}</span>
        </div>
      </div> */}

      <div className="p-4">
        {/* <h3 className="font-medium text-gray-700 mb-2">Puntuación</h3> */}
        <div className="space-y-2 mb-6">
          <img className="mix-blend-multiply" src={beach.bqvImage} alt="" />
        </div>

        {/* <h3 className="font-medium text-gray-700 mb-2">
          Posición en el Ranking
        </h3>
        <div className="space-y-2">
          {rankings.map((rank, idx) => (
            <div
              key={idx}
              className="flex justify-between py-1 border-b border-gray-100"
            >
              <span className="text-gray-600">{rank.name}:</span>
              <span className="text-gray-800 font-medium">{rank.value}</span>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}
