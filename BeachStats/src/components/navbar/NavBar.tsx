import { Link, Outlet, useLocation } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
import { useState, useEffect } from "react";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Check if we're on the homepage
  const isHomePage = location.pathname === "/" || location.pathname === "/home";

  // Handle responsive design and scroll effects
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      if (windowWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [windowWidth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Calculate banner opacity based on scroll position (only used on homepage)
  const bannerOpacity = Math.max(0, 1 - scrollPosition / (windowHeight * 0.5));

  // Calculate navbar properties based on scroll and current page
  const navbarBgOpacity = isHomePage ? Math.min(1, scrollPosition / 100) : 1;
  const textColorClass =
    isHomePage && scrollPosition <= 50 ? "text-white" : "text-dark-700";
  const navbarHeight = isHomePage && scrollPosition <= 50 ? "h-24" : "h-16";

  return (
    <>
      {/* Fixed Navbar - style depends on page and scroll position */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarHeight}`}
        style={{
          backgroundColor: `rgba(255, 255, 255, ${navbarBgOpacity})`,
          boxShadow:
            navbarBgOpacity > 0.8 ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="flex items-center justify-between md:justify-center px-4 md:px-8 h-full">
          {/* Left navigation items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/evaluator"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Evaluadores
            </Link>
            <Link
              to="/beach"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Playas
            </Link>
            <Link
              to="/scientific-advisory"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Consejo Cientifico
            </Link>
          </div>

          {/* Center Logo - visible in desktop */}
          <div className="hidden md:block mx-8">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/Ranking_logo.png"
                alt="Logo"
                className={`rounded-full border-2 border-white bg-white shadow-lg transition-all duration-300 hover:scale-105 ${
                  isHomePage && scrollPosition <= 50 ? "w-16 h-16" : "w-12 h-12"
                }`}
              />
            </Link>
          </div>

          {/* Mobile Logo - visible only on mobile */}
          <div className="md:hidden">
            <Link to="/">
              <img
                src="/Ranking_logo.png"
                alt="Logo"
                className={`rounded-full border-2 border-white bg-white shadow-lg transition-all duration-300 ${
                  isHomePage && scrollPosition <= 50 ? "w-12 h-12" : "w-10 h-10"
                }`}
              />
            </Link>
          </div>

          {/* Right navigation items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/method"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Metodos
            </Link>
            <Link
              to="/school"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Escuela
            </Link>
            <Link
              to="/contacto"
              className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-500 text-xl transition-colors duration-300`}
            >
              Contacto
            </Link>
          </div>

          {/* Hamburger menu button - visible on mobile */}
          <button
            onClick={toggleMenu}
            className={`md:hidden p-2 hover:bg-gold-500 rounded-full transition-colors duration-300 ${textColorClass}`}
          >
            {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full bg-white shadow-lg absolute top-full left-0">
            <div className="flex flex-col">
              <Link
                to="/evaluator"
                className="py-4 px-6 border-b border-gray-100 text-dark-700 font-medium font-sans hover:bg-gold-500"
                onClick={toggleMenu}
              >
                Evaluadores
              </Link>
              <Link
                to="/beach"
                className="py-4 px-6 border-b border-gray-100 text-dark-700 font-medium font-sans hover:bg-gold-500"
                onClick={toggleMenu}
              >
                Playas
              </Link>
              <Link
                to="/method"
                className="py-4 px-6 border-b border-gray-100 text-dark-700 font-medium font-sans hover:bg-gold-500"
                onClick={toggleMenu}
              >
                Metodos
              </Link>
              <Link
                to="/contacto"
                className="py-4 px-6 text-dark-700 font-medium font-sans hover:bg-gold-500"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Banner - only shown on homepage */}
      {isHomePage && (
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: "url('/banner.png')",
            height: `${windowHeight}px`,
            opacity: bannerOpacity,
            transition: "opacity 0.3s ease-out",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute top-1/3 left-4 md:left-12 text-white max-w-xl">
            <h1 className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide mb-2">
              DESCUBRE LAS
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide mb-2">
              MEJORES PLAYAS
            </h1>
            <h1 className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide">
              SEGÚN LA CIENCIA
            </h1>
          </div>

          {/* Scroll indicator animation */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <span className="text-white text-sm mb-2">
              Scroll para descubrir
            </span>
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="animate-bounce w-2 h-2 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to push content below fullscreen banner - only on homepage */}
      {isHomePage && <div style={{ height: `0px` }}></div>}

      {/* Add space to account for the fixed navbar on non-home pages */}
      {!isHomePage && <div className="h-16"></div>}

      {/* Page Content */}
      <main className="bg-white">
        <Outlet />
      </main>
    </>
  );
};

export default Navbar;
