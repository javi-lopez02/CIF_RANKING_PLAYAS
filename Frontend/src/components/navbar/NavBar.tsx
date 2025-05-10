import { Link, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth.context";
import Avatar from "./Avatar";
import { useState } from "react";

const Navbar = () => {
  const { isAuth } = useAuth();
  const [searchText, setSearchText] = useState('');

  return (
    <>
      <div className="w-full">
      {/* Navbar Principal */}
      <div className="flex items-center justify-between bg-white border-b border-gray-200 px-4 h-14">
        <div className="flex items-center space-x-8">
          <Link to={"/"} className="text-teal-700 font-medium hover:text-teal-800">Inicio</Link>
          <Link to={"/"} className="text-teal-700 font-medium hover:text-teal-800">Ranking</Link>
          <Link to={"/"} className="text-teal-700 font-medium hover:text-teal-800">Evaluadores</Link>
          <Link to={"/"} className="text-teal-700 font-medium hover:text-teal-800">Top</Link>
          <Link to={"/"} className="text-teal-700 font-medium hover:text-teal-800">Playas</Link>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar playa..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="pl-2 pr-8 py-1 border border-gray-300 rounded-md text-sm"
          />
          <Search className="absolute right-2 top-1.5 h-4 w-4 text-gray-500" />
        </div>
      </div>
      
      {/* Banner con imagen de fondo y texto */}
      <div className="relative h-64 bg-cover bg-center" style={{backgroundImage: "url('/api/placeholder/800/300')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute top-1/4 left-12 text-white">
          <h1 className="text-3xl font-bold tracking-wide">DESCUBRE LAS</h1>
          <h1 className="text-3xl font-bold tracking-wide">MEJORES PLAYAS</h1>
          <h1 className="text-3xl font-bold tracking-wide">SEGÚN LA CIENCIA</h1>
        </div>
        <div className="absolute right-12 top-1/2 transform -translate-y-1/2">
          <div className="rounded-full h-32 w-32 bg-white bg-opacity-80 flex items-center justify-center p-2">
            <div className="rounded-full h-28 w-28 border-4 border-yellow-200 flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute h-full w-1/2 left-0 bg-blue-300"></div>
                <div className="absolute h-full w-1/2 right-0 bg-yellow-200"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center">
                    <div className="h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center overflow-hidden">
                      <div className="w-12 h-6 bg-blue-400 rounded-t-full absolute top-6"></div>
                      <div className="w-8 h-2 bg-yellow-400 absolute top-8 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-xs font-bold text-gray-600 text-center rotate-12 absolute top-0 right-0 transform -translate-x-2 translate-y-2">MEJORES</div>
                <div className="text-xs font-bold text-gray-600 text-center -rotate-12 absolute bottom-0 left-0 transform translate-x-2 -translate-y-2">PLAYAS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Outlet />
    </>
  );
};
export default Navbar;
