import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EnergyCard = ({ title, description, icon, isSelected, onClick }) => {
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

const WasteToEnergy = () => {
  const [selectedTechnology, setSelectedTechnology] = useState(null);

  const technologies = [
    {
      id: "incineration",
      title: "Thermal Incineration",
      description:
        "High-temperature combustion process that converts municipal solid waste into electricity and heat while reducing volume by 90%.",
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
            d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
          />
        </svg>
      ),
    },
    {
      id: "gasification",
      title: "Plasma Gasification",
      description:
        "Advanced thermal process using plasma torches to convert organic waste into synthetic gas for power generation and biofuels.",
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
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
    {
      id: "anaerobic",
      title: "Anaerobic Digestion",
      description:
        "Biological process that breaks down organic waste to produce biogas for electricity and nutrient-rich digestate for agriculture.",
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
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
      ),
    },
  ];

  const benefits = [
    { metric: "1 ton waste", value: "500-600 kWh", label: "Electricity Generated" },
    { metric: "CO₂ Reduction", value: "0.5-1 ton", label: "Per Ton Processed" },
    { metric: "Landfill Space", value: "90%", label: "Volume Reduction" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200 via-blue-100 to-sky-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-sky-200"></div>
      {/* Floating energy particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            initial={{ y: -100, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-400/10 text-blue-700 text-sm font-medium mb-6">
            Renewable Energy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Waste to <span className="text-blue-700">Energy Generation</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto mb-12">
            Transform municipal and industrial waste into clean, renewable energy 
            while significantly reducing environmental impact and landfill dependence
          </p>

          {/* Benefits Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-6 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"
              >
                <div className="text-2xl font-bold text-blue-700 mb-2">
                  {benefit.value}
                </div>
                <div className="text-sm font-semibold text-black/70 mb-1">
                  {benefit.metric}
                </div>
                <div className="text-xs text-black/50">
                  {benefit.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {technologies.map((technology) => (
            <EnergyCard
              key={technology.id}
              title={technology.title}
              description={technology.description}
              icon={technology.icon}
              isSelected={selectedTechnology === technology.id}
              onClick={() => setSelectedTechnology(technology.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedTechnology && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to implement {technologies.find((t) => t.id === selectedTechnology).title}?
                </h3>
                <p className="text-lg text-black/70 max-w-2xl mx-auto">
                  Our experts will help you assess feasibility, design the system, and secure funding for your waste-to-energy project.
                </p>
              </div>
              <button className="bg-gradient-to-r from-blue-200 to-sky-300 hover:from-blue-100 hover:to-sky-200 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-400/30 transform hover:scale-105">
                Start Your Energy Project
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default WasteToEnergy;