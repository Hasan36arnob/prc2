import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LivelihoodCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-blue-200/60 to-sky-200/60 border-2 border-blue-400/50 shadow-lg shadow-blue-400/10"
          : "bg-white/5 border border-white/10 hover:border-blue-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-200 to-sky-200 shadow-md">
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

const AlternativeLivelihood = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "eco-tourism",
      title: "Eco-Tourism",
      description:
        "Develop sustainable tourism initiatives that preserve natural resources while creating income opportunities for local communities.",
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: "agri-business",
      title: "Agri-Business",
      description:
        "Transform traditional farming into profitable agri-business ventures with value-added products and market access.",
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
            d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0A2.704 2.704 0 013 15.546M7 10V6a3 3 0 013-3m4 0a3 3 0 013 3v4m-7 4h8m2 4v2a1 1 0 01-1 1H9a1 1 0 01-1-1v-2"
          />
        </svg>
      ),
    },
    {
      id: "digital-skills",
      title: "Digital Skills",
      description:
        "Empower communities with digital literacy and remote work skills to access global employment opportunities.",
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-sky-200"></div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-200/30 text-blue-700 text-sm font-medium mb-6">
            Sustainable Income
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Alternative <span className="text-blue-700">Livelihood Solutions</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Creating sustainable economic opportunities that empower communities
            while preserving cultural heritage and natural resources
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <LivelihoodCard
              key={solution.id}
              title={solution.title}
              description={solution.description}
              icon={solution.icon}
              isSelected={selectedSolution === solution.id}
              onClick={() => setSelectedSolution(solution.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedSolution && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-16 text-center"
            >
              <button className="bg-gradient-to-r from-blue-200 to-sky-300 hover:from-blue-100 hover:to-sky-200 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-400/30">
                Learn About {solutions.find((s) => s.id === selectedSolution).title}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AlternativeLivelihood;