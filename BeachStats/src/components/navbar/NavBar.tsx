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

  // Navigation items array for easier management
  const navigationItems = [
    { path: "/evaluator", label: "Evaluadores" },
    { path: "/beach", label: "Playas" },
    { path: "/scientific-advisory", label: "Consejo Científico" },
    { path: "/method", label: "Métodos" },
    { path: "/school", label: "Escuela" },
    { path: "/contacto", label: "Contacto" },
  ];

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
    isHomePage && scrollPosition <= 50 ? "text-white" : "text-gray-700";
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
          {/* Left navigation items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(0, 3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-600 text-xl transition-all duration-300 transform hover:scale-105`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Center Logo - visible in desktop */}
          <div className="hidden md:block mx-8">
            <Link to="/" className="flex items-center justify-center">
              <img
                src="/Ranking_logo.png"
                alt="Logo"
                className={`rounded-full border-2 border-white bg-white shadow-lg transition-all duration-300 hover:scale-110 ${
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
                className={`rounded-full border-2 border-white bg-white shadow-lg transition-all duration-300 hover:scale-110 ${
                  isHomePage && scrollPosition <= 50 ? "w-12 h-12" : "w-10 h-10"
                }`}
              />
            </Link>
          </div>

          {/* Right navigation items - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.slice(3).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${textColorClass} font-medium font-sans hover:border-b-2 hover:border-gold-500 hover:text-gold-600 text-xl transition-all duration-300 transform hover:scale-105`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Hamburger menu button - visible on mobile */}
          <div className="md:hidden relative">
            <button
              onClick={toggleMenu}
              className={`p-3 rounded-full transition-all duration-300 ${
                isMenuOpen
                  ? "bg-gold-500 text-white scale-110"
                  : `${textColorClass} hover:bg-gold-100 hover:text-gold-600`
              } shadow-sm`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <BiX size={24} /> : <BiMenu size={24} />}
            </button>

            {/* Mobile dropdown menu - positioned relative to button */}
            <div
              className={`absolute top-full right-0 mt-2 w-64 bg-white/95 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out transform-gpu ${
                isMenuOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
              }`}
              style={{
                transformOrigin: 'top right'
              }}
            >
              {/* Arrow pointing to button */}
              <div className="absolute -top-2 right-6 w-4 h-4 bg-white/95 backdrop-blur-lg border-l border-t border-gray-100 transform rotate-45"></div>
              
              <div className="py-4 px-2">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="group relative block py-3 px-4 rounded-xl text-gray-700 font-medium transition-all duration-300 hover:bg-gradient-to-r hover:from-gold-50 hover:to-gold-100 hover:text-gold-700 hover:shadow-sm hover:scale-[1.02] active:scale-[0.98]"
                      onClick={toggleMenu}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        animation: isMenuOpen
                          ? "slideInFromRight 0.3s ease-out forwards"
                          : "none",
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-base">{item.label}</span>
                        <div className="w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></div>
                      </div>
                      <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gold-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
            <h1 className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide mb-2 animate-fade-in-up">
              DESCUBRE LAS
            </h1>
            <h1
              className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide mb-2 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              MEJORES PLAYAS
            </h1>
            <h1
              className="text-3xl text-white sm:text-5xl font-bold font-sans tracking-wide animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              SEGÚN LA CIENCIA
            </h1>
          </div>

          {/* Scroll indicator animation */}
          <div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
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