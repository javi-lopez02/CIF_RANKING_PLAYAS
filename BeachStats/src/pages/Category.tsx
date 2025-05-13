import Best10Beaches from '../components/category/Best10Beaches'
import CategoryBeachSearch from '../components/category/CategoryBeachSearch'
import InfoZona from '../components/category/InfoZona'
import HowToBeExpert from '../components/home/How_ToBe_Expert'

export default function Category() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 w-full">
          <div className="w-full md:w-4/5 flex flex-col px-2 sm:px-4 md:px-6">
            <div className="flex flex-col w-full gap-4 lg:gap-8 py-4">
              {/* Sección izquierda con galería */}
              <InfoZona></InfoZona>
              <Best10Beaches></Best10Beaches>
              <CategoryBeachSearch></CategoryBeachSearch>
              
            </div>
            <HowToBeExpert></HowToBeExpert>
          </div>
    
          {/* Sección de Google Anuncios */}
          <div className="w-full md:w-1/5 md:min-h-screen p-4 bg-white border-t-2 md:border-t-0 md:border-l-2 border-gray-200 mt-4 md:mt-0 flex items-center justify-center">
            <div className="w-full h-32 md:h-auto border border-gray-300 rounded flex items-center justify-center text-center p-4 text-gray-500">
              Este es el sitio donde van los anuncios de Google
            </div>
          </div>
        </div>
  )
}
