import { Link, Outlet, useNavigate } from "react-router-dom";
import { BiSearch, BiMenu, BiX } from "react-icons/bi";
import { Autocomplete, AutocompleteItem, Avatar, Button } from "@heroui/react";
import { useState, useEffect } from "react";

export const animals = [
  {
    label: "Cat",
    key: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    key: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    key: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", key: "lion", description: "The king of the jungle" },
  { label: "Tiger", key: "tiger", description: "The largest cat species" },
  { label: "Giraffe", key: "giraffe", description: "The tallest land animal" },
  {
    label: "Dolphin",
    key: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    key: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    key: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    key: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    key: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    key: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    key: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Detectar el tamaño de la pantalla para aplicar cambios responsivos
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
        setIsSearchOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSelect = (item) => {
    navigate(`/search/${item.key}`);
    setIsSearchOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isSearchOpen) setIsSearchOpen(false);
  };

  return (
    <>
      <div className="w-full">
        {/* Navbar Principal */}
        <div className="flex items-center justify-between bg-white border-b border-gray-200 py-3 px-4 h-auto">
          {/* Enlaces de navegación - visibles en desktop, ocultos en móvil */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/"
              className="text-dark font-medium font-sans hover:border-b-2 hover:border-gold hover:text-gold text-xl"
            >
              Inicio
            </Link>
            <Link
              to="/"
              className="text-dark font-medium font-sans hover:border-b-2 hover:border-gold hover:text-gold text-xl"
            >
              Ranking
            </Link>
            <Link
              to="/"
              className="text-dark font-medium font-sans hover:border-b-2 hover:border-gold hover:text-gold text-xl"
            >
              Evaluadores
            </Link>
            <Link
              to="/"
              className="text-dark font-medium font-sans hover:border-b-2 hover:border-gold hover:text-gold text-xl"
            >
              Top
            </Link>
            <Link
              to="/"
              className="text-dark font-medium font-sans hover:border-b-2 hover:border-gold hover:text-gold text-xl"
            >
              Playas
            </Link>
          </div>

          {/* Búsqueda y botones móviles */}
          <div className="flex items-center space-x-2">
            {/* Búsqueda en versión desktop */}
            <div className="block">
              <Autocomplete
                aria-label="Select a beach"
                classNames={{
                  base: "min-w-[300px] w-[400px]",
                  listboxWrapper: "max-h-[320px]",
                  selectorButton: "text-default-500",
                }}
                defaultItems={animals}
                inputProps={{
                  classNames: {
                    input: "ml-1 text-dark font-sans",
                    inputWrapper: "h-[48px]",
                  },
                }}
                listboxProps={{
                  hideSelectedIcon: true,
                  itemClasses: {
                    base: [
                      "rounded-medium",
                      "text-default-500",
                      "font-sans",
                      "transition-opacity",
                      "data-[hover=true]:text-foreground",
                      "dark:data-[hover=true]:bg-default-50",
                      "data-[pressed=true]:opacity-70",
                      "data-[hover=true]:bg-default-200",
                      "data-[selectable=true]:focus:bg-default-100",
                      "data-[focus-visible=true]:ring-default-500",
                    ],
                  },
                }}
                placeholder="Search your favorite beach"
                onSelectionChange={handleSelect}
                popoverProps={{
                  offset: 10,
                  classNames: {
                    base: "rounded-large",
                    content:
                      "p-1 border-small border-default-100 bg-background",
                  },
                }}
                radius="full"
                startContent={
                  <BiSearch
                    className="text-default-400"
                    size={20}
                    strokeWidth={2.5}
                  />
                }
                variant="faded"
                color="primary"
                
              >
                {(item) => (
                  <AutocompleteItem key={item.key} textValue={item.label}>
                    <div className="flex justify-between items-center">
                      <div className="flex gap-2 items-center">
                        <Avatar
                          alt={item.label}
                          className="flex-shrink-0"
                          size="sm"
                          src={item.label}
                        />
                        <div className="flex flex-col">
                          <span className="text-small">{item.label}</span>
                          <span className="text-tiny text-default-400">
                            {item.description}
                          </span>
                        </div>
                      </div>
                      <Button
                        className="border-small mr-0.5 font-medium font-sans shadow-small"
                        radius="full"
                        size="sm"
                        variant="bordered"
                      >
                        Go to
                      </Button>
                    </div>
                  </AutocompleteItem>
                )}
              </Autocomplete>
            </div>
          </div>
          {/* Botón de menú hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-teal-600 hover:bg-gold rounded-full"
          >
            {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-white border-b border-gray-200">
            <div className="flex flex-col">
              <Link
                to="/"
                className="py-4 px-6 border-b border-gray-100 text-dark font-medium font-sans hover:bg-gold"
                onClick={toggleMenu}
              >
                Inicio
              </Link>
              <Link
                to="/"
                className="py-4 px-6 border-b border-gray-100 text-dark font-medium font-sans hover:bg-gold"
                onClick={toggleMenu}
              >
                Ranking
              </Link>
              <Link
                to="/"
                className="py-4 px-6 border-b border-gray-100 text-dark font-medium font-sans hover:bg-gold"
                onClick={toggleMenu}
              >
                Evaluadores
              </Link>
              <Link
                to="/"
                className="py-4 px-6 border-b border-gray-100 text-dark font-medium font-sans hover:bg-gold"
                onClick={toggleMenu}
              >
                Top
              </Link>
              <Link
                to="/"
                className="py-4 px-6 text-dark font-medium font-sans hover:bg-gold"
                onClick={toggleMenu}
              >
                Playas
              </Link>
            </div>
          </div>
        )}

        {/* Banner con imagen de fondo y texto - responsivo */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner.png')",
            height: windowWidth < 640 ? "200px" : "256px",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-1/4 left-4 md:left-12 text-white">
            <h1 className="text-2xl text-white sm:text-4xl font-bold font-sans tracking-wide">
              DESCUBRE LAS
            </h1>
            <h1 className="text-2xl text-white sm:text-4xl font-bold font-sans tracking-wide">
              MEJORES PLAYAS
            </h1>
            <h1 className="text-2xl text-white sm:text-4xl font-bold font-sans tracking-wide">
              SEGÚN LA CIENCIA
            </h1>
          </div>

          {/* Logo circular responsivo */}
          <div className="absolute top-8 right-4 md:right-12">
            <img
              src="/Ranking_logo.png"
              alt="Logo"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full border-2 border-white bg-white shadow-lg"
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
