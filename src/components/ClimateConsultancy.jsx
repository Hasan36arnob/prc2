import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ServiceCard = ({ service, isSelected, onSelect, color }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white/5 p-6 rounded-xl border ${
        isSelected ? `border-${color}-400` : `border-${color}-400/20`
      }`}
      onClick={() => onSelect(service.id)}
    >
      <h3 className={`text-xl font-bold mb-3 text-${color}-300`}>
        {service.title}
      </h3>
      <p className={`text-${color}-800/80 mb-4`}>{service.description}</p>

      <ul className={`space-y-2 text-${color}-800/90 text-sm`}>
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-start">
            <span className={`text-${color}-400 mr-2`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const ClimateConsultancy = () => {
  const [selectedServices, setSelectedServices] = useState(new Set());

  const services = [
    {
      id: "climate-risk",
      title: "Climate Risk Assessment",
      description: "Identify vulnerabilities to climate impacts",
      features: [
        "Hazard mapping",
        "Vulnerability analysis",
        "Adaptation planning",
      ],
    },
    {
      id: "adaptation-strategy",
      title: "Adaptation Strategy",
      description: "Develop resilience roadmaps",
      features: [
        "Policy alignment",
        "Stakeholder engagement",
        "Implementation plans",
      ],
    },
    {
      id: "green-infrastructure",
      title: "Green Infrastructure Design",
      description: "Nature-based solution design",
      features: [
        "Urban cooling",
        "Stormwater management",
        "Biodiversity integration",
      ],
    },
  ];

  const toggleService = (id) => {
    const newSelected = new Set(selectedServices);
    newSelected.has(id) ? newSelected.delete(id) : newSelected.add(id);
    setSelectedServices(newSelected);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-200 to-blue-300 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/pattern.png')]"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Climate Consultancy
          </h2>
          <p className="text-xl text-blue-800/80 max-w-2xl mx-auto">
            Building resilience through strategic planning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              isSelected={selectedServices.has(service.id)}
              onSelect={toggleService}
              color="blue"
            />
          ))}
        </div>

        <AnimatePresence>
          {selectedServices.size > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-blue-400/20 text-center"
            >
              <button className="bg-blue-400 hover:bg-blue-300 text-blue-900 px-6 py-3 rounded-full font-medium">
                Discuss Your Climate Needs
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ClimateConsultancy;