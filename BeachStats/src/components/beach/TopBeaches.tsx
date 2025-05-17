import { useState } from "react";
import { BiLeftArrowAlt, BiRightArrowAlt, BiSearch } from "react-icons/bi";

export default function TopBeaches() {
  // Estado para las playas
  const [beaches, setBeaches] = useState([
    {
      id: 1,
      name: "Varadero Internacional",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmFxhIXNxE3v_Z51Bi_PfGB_Rop4-8ORf7g&s",
      location: "Cuba",
      rating: 98,
      category: "Internacional",
    },
    {
      id: 2,
      name: "Varadero Histórico",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWzMmMXHq066RciOgMHfX3dOwvTO8NS3ocYA&s",
      location: "Cuba",
      rating: 97,
      category: "Histórico",
    },
    {
      id: 3,
      name: "Varadero (Meliá Antillas)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7efC2ezqswTymCnTpH9xMiYeFX66HDmDXdg&s",
      location: "Cuba",
      rating: 95,
      category: "Resort",
    },
    {
      id: 4,
      name: "Varadero (Hotel Internacional)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxmFxhIXNxE3v_Z51Bi_PfGB_Rop4-8ORf7g&s",
      location: "Cuba",
      rating: 93,
      category: "Hotel",
    },
    {
      id: 5,
      name: "La Estrella (Santa María)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfX6hJqX4QDJew1mGvHv3ybdN6oFvYJGgQw&s",
      location: "Cuba",
      rating: 91,
      category: "Familiar",
    },
    {
      id: 6,
      name: "Perla Blanca (Sector Paradissus)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBjb_DTSMnS_c5abMJmm8jCBQgKLXv7UBtMg&s",
      location: "Cuba",
      rating: 90,
      category: "Exclusivo",
    },
    {
      id: 7,
      name: "Playa del Carmen",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3w5VdZP_WP1i8uzTQ7fTL2U4jluPyarsnw&s",
      location: "México",
      rating: 96,
      category: "Turístico",
    },
    {
      id: 8,
      name: "Punta Cana",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvKTMJY8ocOoBXS5vnmDMoCTVO8MOJGCMPXA&s",
      location: "República Dominicana",
      rating: 94,
      category: "Resort",
    },
    {
      id: 9,
      name: "Samaná",
      image: "https://images.prismic.io/prismic-rd-2/Z-bCkHdAxsiBwEDn_Samana.jpg?auto=format%2Ccompress&fit=max&w=3840",
      location: "República Dominicana",
      rating: 92,
      category: "Natural",
    },
    {
      id: 10,
      name: "Seven Mile Beach",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsODtP_yyyZZILKXr2r-NNGt2kkCoLXkXBQ&s",
      location: "Jamaica",
      rating: 95,
      category: "Familiar",
    },
    {
      id: 11,
      name: "Eagle Beach",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY0sVPuzq07ydk_7lrSvCqVfumaAmOj_NCYw&s",
      location: "Aruba",
      rating: 96,
      category: "Romántico",
    },
    {
      id: 12,
      name: "Isla Mujeres",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLA7058PMzknNhp4T-pNMAzc5ohn2evofmsQ&s",
      location: "México",
      rating: 93,
      category: "Aventura",
    },
  ]);

  // Estado para filtros y paginación
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating-desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedLocation, setSelectedLocation] = useState("Todos");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const beachesPerPage = 6;

  // Obtener ubicaciones y categorías únicas para los filtros
  const locations = [
    "Todos",
    ...new Set(beaches.map((beach) => beach.location)),
  ];
  const categories = [
    "Todos",
    ...new Set(beaches.map((beach) => beach.category)),
  ];

  // Filtrar y ordenar playas
  const filteredBeaches = beaches.filter((beach) => {
    const matchesSearch = beach.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesLocation =
      selectedLocation === "Todos" || beach.location === selectedLocation;
    const matchesCategory =
      selectedCategory === "Todos" || beach.category === selectedCategory;
    return matchesSearch && matchesLocation && matchesCategory;
  });

  // Ordenar playas
  const sortedBeaches = [...filteredBeaches].sort((a, b) => {
    if (sortBy === "rating-desc") {
      return b.rating - a.rating;
    } else if (sortBy === "rating-asc") {
      return a.rating - b.rating;
    } else if (sortBy === "name-asc") {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  // Calcular playas para la página actual
  const indexOfLastBeach = currentPage * beachesPerPage;
  const indexOfFirstBeach = indexOfLastBeach - beachesPerPage;
  const currentBeaches = sortedBeaches.slice(
    indexOfFirstBeach,
    indexOfLastBeach
  );
  const totalPages = Math.ceil(sortedBeaches.length / beachesPerPage);

  // Cambiar página
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-5xl font-sans font-bold text-center mb-6 text-dark">
        Explora las Playas del Mundo
      </h1>

      {/* Búsqueda y filtros */}
      <div className="bg-white rounded-lg shadow p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Barra de búsqueda */}
          <div className="relative flex-grow">
            <BiSearch className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar playa..."
              className="font-sans pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gold"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Selector de ordenamiento */}
          <div className="flex-shrink-0 w-full md:w-64">
            <select
              className="w-full border font-sans border-gray-300 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-navy"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="rating-desc">
                Ordenar: De mayor a menor puntuación
              </option>
              <option value="rating-asc">
                Ordenar: De menor a mayor puntuación
              </option>
              <option value="name-asc">Ordenar por: Nombre (A-Z)</option>
              <option value="name-desc">Ordenar por: Nombre (Z-A)</option>
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Filtro por ubicación */}
          <div className="w-full md:w-1/2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedLocation}
              onChange={(e) => {
                setSelectedLocation(e.target.value);
                setCurrentPage(1); // Reset a la primera página al filtrar
              }}
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location === "Todos" ? "Todas las ubicaciones" : location}
                </option>
              ))}
            </select>
          </div>

          {/* Filtro por categoría */}
          <div className="w-full md:w-1/2">
            <select
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setCurrentPage(1); // Reset a la primera página al filtrar
              }}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === "Todos" ? "Todas las categorías" : category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resultados y contador */}
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-600">
          Mostrando {indexOfFirstBeach + 1}-
          {Math.min(indexOfLastBeach, sortedBeaches.length)} de{" "}
          {sortedBeaches.length} resultados
        </p>
      </div>

      {/* Galería de playas */}
      {currentBeaches.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentBeaches.map((beach) => (
            <div
              key={beach.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={beach.image}
                  alt={beach.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-center text-blue-500 mb-1">
                  {beach.name}
                </h3>
                <p className="text-sm text-gray-500 text-center mb-2">
                  {beach.location} • {beach.category}
                </p>
                <div className="flex justify-center items-center mb-2">
                  <span className="bg-blue-100 text-blue-800 font-medium px-2.5 py-0.5 rounded text-sm">
                    BQV {beach.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">
            No se encontraron playas con los criterios seleccionados.
          </p>
        </div>
      )}

      {/* Paginación */}
      <div className="flex justify-center items-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center justify-center px-3 py-2 rounded-md mr-2 bg-gray-100 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BiLeftArrowAlt size={18} />
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={`px-4 py-2 mx-1 rounded-md ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gold"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center justify-center px-3 py-2 rounded-md ml-2 bg-gray-100 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <BiRightArrowAlt size={18} />
        </button>
      </div>
    </div>
  );
}
