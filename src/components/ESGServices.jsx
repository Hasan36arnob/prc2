import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ESGCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-blue-500/20 to-sky-500/20 border-2 border-blue-400/50 shadow-lg shadow-blue-400/10"
          : "bg-white/5 border border-white/10 hover:border-blue-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-sky-600 shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-black text-center">{title}</h3>
        <p className="text-lg text-black/80 text-center">{description}</p>
      </div>

      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-blue-400 text-blue-900 p-2 rounded-full shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

const ESGServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "environmental",
      title: "Environmental",
      description:
        "Sustainable practices, carbon footprint reduction, and environmental impact assessments.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 21v-2a4 4 0 014-4h2"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 3h2a4 4 0 014 4v2"
          />
        </svg>
      ),
    },
    {
      id: "social",
      title: "Social",
      description:
        "Driving meaningful change through community partnerships and safeguarding human rights.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
    },
    {
      id: "governance",
      title: "Governance",
      description:
        "Corporate ethics, board diversity, and transparent business practices.",
      icon: (
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-sky-400"></div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 text-black text-sm font-medium mb-6">
            Sustainable Business
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Comprehensive <span className="text-blue-700">ESG Services</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Integrating environmental, social, and governance principles into
            your core business strategy
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <ESGCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isSelected={selectedService === service.id}
              onClick={() => setSelectedService(service.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center"
            >
              <button className="bg-gradient-to-r from-blue-400 to-sky-500 hover:from-blue-300 hover:to-sky-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-400/30">
                Learn About Our{" "}
                {services.find((s) => s.id === selectedService).title} Solutions
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ESGServices;