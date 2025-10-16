import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 text-black py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            {/* Company Header */}
            <div className="flex items-center space-x-3 mb-6">
             
              <h3 className="text-xl font-bold text-blue-400">Climate Tech</h3>
            </div>

            {/* Managing Partner Section */}
            <div className="mb-6 p-4 bg-blue-100 rounded-lg border-l-4 border-blue-400">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-black mb-2">
                    Bushra Monowar Duti, Managing Partner
                  </h4>
                  <p className="text-black/70 text-sm">
                    Jan 2025 - Present | Bangladesh (Remote)
                  </p>
                </div>
                <a
                  href="https://bushradutiportfolio.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Website
                </a>
              </div>
            </div>

            {/* Company Description */}
            <p className="text-black/70 mb-6">
              Pioneering sustainable innovations for business and the planet.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/yourcompany"
                className="text-blue-400 hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/yourcompany"
                className="text-blue-400 hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-black/70 mb-4">
              Get in touch with us for any inquiries about our sustainable
              technology and green solutions.
            </p>
            <a
              href="mailto:arnobhasanice@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              tech4clim@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-blue-200 mt-12 pt-8 text-center text-black/70">
          <p>
            &copy; {new Date().getFullYear()} Climate Tech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
