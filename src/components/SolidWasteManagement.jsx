import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WasteCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-teal-200/60 to-cyan-200/60 border-2 border-teal-400/50 shadow-lg shadow-teal-400/10"
          : "bg-white/5 border border-white/10 hover:border-teal-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-teal-200 to-cyan-200 shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-black text-center">{title}</h3>
        <p className="text-lg text-black/80 text-center">{description}</p>
      </div>

      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-teal-400 text-teal-900 p-2 rounded-full shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

const SolidWasteManagement = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "recycling",
      title: "Recycling Programs",
      description:
        "Implement comprehensive recycling systems to transform waste into valuable resources and reduce landfill burden.",
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
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
    },
    {
      id: "composting",
      title: "Organic Waste Composting",
      description:
        "Convert food and garden waste into nutrient-rich compost for agriculture and landscaping applications.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
    },
    {
      id: "waste-energy",
      title: "Waste-to-Energy",
      description:
        "Harness energy from non-recyclable waste through advanced conversion technologies for sustainable power generation.",
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
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-teal-200 via-cyan-100 to-blue-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-200 to-cyan-200"></div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-teal-400/10 text-teal-700 text-sm font-medium mb-6">
            Environmental Sustainability
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Smart <span className="text-teal-700">Waste Management</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto">
            Transforming waste management through innovative solutions that promote
            circular economy principles and environmental stewardship
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((solution) => (
            <WasteCard
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
              <button className="bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-teal-400/30">
                Implement{" "}
                {solutions.find((s) => s.id === selectedSolution).title}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SolidWasteManagement;