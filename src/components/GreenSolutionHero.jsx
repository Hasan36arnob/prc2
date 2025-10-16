import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const GreenSolutionsHero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href, isContactPage) => {
    e.preventDefault();

    if (isContactPage) {
      navigate("/contact");
      setIsMenuOpen(false);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: "Our Approach", href: "#value", isContactPage: false },
    { name: "Services", href: "#services", isContactPage: false },
    { name: "Contact", href: "/contact", isContactPage: true },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 bg-blue-400 shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-opacity-95" : "bg-opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
              
              <span className="text-lg font-semibold text-white">
              WeCare for Climate Foundation
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.isContactPage)
                  }
                  className="text-white/90 hover:text-white transition-colors duration-300 font-medium"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white"
            >
              <div
                className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${
                  isMenuOpen ? "transform rotate-45 translate-y-2" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 mb-1.5 transition-all bg-white ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <div
                className={`w-6 h-0.5 transition-all bg-white ${
                  isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? "max-h-64" : "max-h-0"
            } overflow-hidden bg-blue-300`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.isContactPage)
                  }
                  className="block px-3 py-2 text-blue-900 hover:text-blue-800 hover:bg-blue-200/70 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-300 to-sky-200 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-blue-900 mb-8">
           Harnessing Technology for Climate Solutions and Community Development{" "}
            <span className="text-sky-600"> </span>
          </h1>
          <p className="text-xl text-blue-800 mb-12 max-w-2xl mx-auto">
            Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="px-8 py-4 bg-white text-blue-700 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-blue-700 text-blue-700 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenSolutionsHero;