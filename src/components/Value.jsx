import React from "react";

function Value() {
  const valueProps = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          />
        </svg>
      ),
      title: "Geospatial Expertise",
      description:
        "Deep knowledge in Google Earth Engine and QGIS for precise environmental analysis and mapping.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: "Climate Data Science",
      description:
        "Advanced Python analytics transforming raw satellite data into actionable climate insights.",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-blue-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      ),
      title: "Scalable Solutions",
      description:
        "Modular geospatial tools that grow with your climate monitoring needs.",
    },
  ];

  return (
    <div id="value">
      <section className="py-24 bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/pattern.png')] animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-20 text-blue-600">
            <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 text-blue-400 text-sm font-semibold mb-6 ring-1 ring-blue-400/20">
              Our Technical Value
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900 leading-tight">
              Climate Insights Powered by Innovation
            </h2>
            <p className="text-xl text-blue-800/80 max-w-3xl mx-auto">
              We transform satellite data into actionable intelligence using
              Google Earth Engine, QGIS, and Python to drive your climate
              solutions forward.
            </p>
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="bg-white/40 backdrop-blur-lg rounded-2xl p-8 border border-blue-400/10 hover:border-blue-400/20 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                <div className="bg-blue-400/10 rounded-xl p-3 inline-block mb-6">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                  {prop.title}
                </h3>
                <p className="text-blue-800/70">{prop.description}</p>
              </div>
            ))}
          </div>

          {/* Stats Section - Optional for later */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">100+</div>
              <div className="text-green-100/70">GEE Scripts Developed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">50+</div>
              <div className="text-green-100/70">QGIS Projects</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">10TB+</div>
              <div className="text-green-100/70">Satellite Data Processed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-green-300 mb-2">24/7</div>
              <div className="text-green-100/70">Monitoring Capabilities</div>
            </div>
          </div> */}

          {/* CTA Section */}
          {/* <div className="mt-20 text-center">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-400 text-green-900 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25">
              Explore Our Geospatial Solutions
            </button>
            <p className="mt-4 text-green-100/60 text-lg">
              Trusted by environmental organizations and climate-focused
              enterprises
            </p>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default Value;