import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const BlueprintHero = () => {
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
        className={`fixed w-full z-50 bg-primary-700 shadow-lg transition-all duration-300 ${
          isScrolled ? "bg-opacity-95" : "bg-opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center space-x-3">
            <img
                src="/blue.jpg"
                alt="Climate Tech"
                className="w-14 h-14 rounded-md border-2 border-white/20"
              />
              <span className="text-lg font-semibold text-white">
                Climate Tech and Green Solutions
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
            } overflow-hidden bg-primary-800`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) =>
                    handleNavClick(e, link.href, link.isContactPage)
                  }
                  className="block px-3 py-2 text-white/90 hover:text-white hover:bg-primary-600/50 rounded-md transition-colors duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary-900 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-8">
            Harnessing Technology for Climate Solutions{" "}
            <span className="text-primary-400"> </span>
          </h1>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join us in revolutionizing the way businesses approach
            sustainability. Together, we can make a difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            {/* <button className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:bg-green-50 transition-all duration-300 hover:shadow-xl hover:scale-105 transform">
              Get Started
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlueprintHero;
