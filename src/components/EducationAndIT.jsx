import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EdTechCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-blue-200/60 to-cyan-200/60 border-2 border-blue-400/50 shadow-lg shadow-blue-400/10"
          : "bg-white/5 border border-white/10 hover:border-blue-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-blue-200 to-cyan-200 shadow-md">
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

const EducationAndIT = () => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  const solutions = [
    {
      id: "digital-classrooms",
      title: "Digital Classrooms",
      description:
        "Transform traditional learning spaces with interactive smart boards, cloud-based platforms, and collaborative digital tools for enhanced engagement.",
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
    {
      id: "coding-academy",
      title: "Coding Academy",
      description:
        "Comprehensive programming courses and coding bootcamps that equip students with in-demand tech skills for the digital economy.",
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
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      id: "stem-labs",
      title: "STEM Labs",
      description:
        "State-of-the-art laboratories equipped with robotics, 3D printing, and AI tools to foster innovation and hands-on learning.",
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
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
    },
  ];

  const impactStats = [
    { number: "10K+", label: "Students Trained" },
    { number: "500+", label: "Schools Equipped" },
    { number: "85%", label: "Employment Rate" },
    { number: "200+", label: "Industry Partners" },
  ];

  const features = [
    "Cloud-Based Learning Platforms",
    "AI-Powered Tutoring Systems",
    "Virtual Reality Classrooms",
    "Real-Time Progress Analytics",
    "Industry Certification Programs",
    "Remote Learning Capabilities"
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-blue-200 via-cyan-100 to-sky-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 to-cyan-200"></div>
      {/* Animated binary code background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-600 font-mono text-sm"
            initial={{ y: -50, x: Math.random() * window.innerWidth }}
            animate={{
              y: window.innerHeight + 50,
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {Math.random().toString(2).substring(2, 10)}
          </motion.div>
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
            EdTech Innovation
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Education <span className="text-blue-700"> & Information Technology</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto mb-12">
            Bridging the digital divide through cutting-edge educational technology 
            that prepares students for success in the 21st-century digital landscape
          </p>

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-4 bg-white/20 rounded-2xl backdrop-blur-sm border border-white/30"
              >
                <div className="text-2xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-black/70 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center p-3 bg-white/30 rounded-lg backdrop-blur-sm border border-white/40"
              >
                <svg className="w-4 h-4 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                </svg>
                <span className="text-sm text-black/80 font-medium">{feature}</span>
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
          {solutions.map((solution) => (
            <EdTechCard
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
              className="text-center"
            >
              <div className="mb-8 p-8 bg-white/20 rounded-3xl backdrop-blur-sm border border-white/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Transform Education with {solutions.find((s) => s.id === selectedSolution).title}
                </h3>
                <p className="text-lg text-black/70 mb-6">
                  Our comprehensive EdTech solutions are designed to create engaging, 
                  effective learning experiences that prepare students for the digital future.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-300 hover:to-cyan-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-400/30 transform hover:scale-105">
                    Implement Solution
                  </button>
                  <button className="border-2 border-blue-400 text-blue-600 hover:bg-blue-400/10 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Schedule Demo
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Partnership CTA */}
        {!selectedSolution && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
        
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default EducationAndIT;