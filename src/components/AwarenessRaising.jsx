import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AwarenessCard = ({ title, description, icon, isSelected, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className={`relative p-8 rounded-3xl transition-all duration-300 cursor-pointer ${
        isSelected
          ? "bg-gradient-to-br from-indigo-200/60 to-blue-200/60 border-2 border-indigo-400/50 shadow-lg shadow-indigo-400/10"
          : "bg-white/5 border border-white/10 hover:border-indigo-400/30"
      }`}
      onClick={onClick}
    >
      <div className="space-y-6">
        <div className="flex justify-center">
          <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-200 to-blue-200 shadow-md">
            {icon}
          </div>
        </div>
        <h3 className="text-2xl font-bold text-black text-center">{title}</h3>
        <p className="text-lg text-black/80 text-center">{description}</p>
      </div>

      {isSelected && (
        <div className="absolute -top-3 -right-3 bg-indigo-400 text-indigo-900 p-2 rounded-full shadow-md">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
        </div>
      )}
    </motion.div>
  );
};

const AwarenessRaising = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);

  const methods = [
    {
      id: "digital-campaigns",
      title: "Digital Campaigns",
      description:
        "Leverage social media, targeted ads, and online platforms to reach diverse audiences with compelling environmental messaging.",
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
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      ),
    },
    {
      id: "community-workshops",
      title: "Community Workshops",
      description:
        "Interactive sessions and hands-on training that empower communities with knowledge and practical skills for sustainable living.",
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
      id: "educational-materials",
      title: "Educational Materials",
      description:
        "Develop engaging resources, infographics, and toolkits that simplify complex environmental concepts for all age groups.",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
    },
  ];

  const impactStats = [
    { number: "85%", label: "Increase in Community Awareness" },
    { number: "50K+", label: "People Reached Annually" },
    { number: "200+", label: "Workshops Conducted" },
    { number: "95%", label: "Participant Satisfaction" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-indigo-200 via-blue-100 to-cyan-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/pattern-grid.svg')]"></div>
      </div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-200 to-blue-200"></div>
      {/* Floating awareness elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-indigo-400/20 rounded-full"
            initial={{ 
              y: Math.random() * window.innerHeight,
              x: Math.random() * window.innerWidth 
            }}
            animate={{
              y: [null, -100, null],
              x: [null, Math.random() * 100 - 50, null],
            }}
            transition={{
              duration: Math.random() * 8 + 8,
              repeat: Infinity,
              repeatType: "reverse",
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
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-400/10 text-indigo-700 text-sm font-medium mb-6">
            Public Engagement
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Awareness <span className="text-indigo-700">Raising Initiatives</span>
          </h2>
          <p className="text-xl text-black/80 max-w-3xl mx-auto mb-12">
            Empowering communities through targeted education and engagement strategies 
            that drive meaningful environmental action and behavioral change
          </p>

          {/* Impact Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center p-4"
              >
                <div className="text-3xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-black/70 font-medium">
                  {stat.label}
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
          {methods.map((method) => (
            <AwarenessCard
              key={method.id}
              title={method.title}
              description={method.description}
              icon={method.icon}
              isSelected={selectedMethod === method.id}
              onClick={() => setSelectedMethod(method.id)}
            />
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedMethod && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="text-center"
            >
              <div className="mb-8 p-8 bg-white/20 rounded-3xl backdrop-blur-sm border border-white/30 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-black mb-4">
                  Ready to launch your {methods.find((m) => m.id === selectedMethod).title.toLowerCase()}?
                </h3>
                <p className="text-lg text-black/70 mb-6">
                  Our team will help you design and implement effective awareness campaigns 
                  that resonate with your target audience and drive real impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="bg-gradient-to-r from-indigo-400 to-blue-500 hover:from-indigo-300 hover:to-blue-400 text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-indigo-400/30 transform hover:scale-105">
                    Start Awareness Campaign
                  </button>
                  <button className="border-2 border-indigo-400 text-indigo-600 hover:bg-indigo-400/10 px-6 py-3 rounded-full font-semibold transition-all duration-300">
                    Download Resources
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional Call to Action */}
        {!selectedMethod && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <div className="bg-white/30 rounded-2xl p-8 backdrop-blur-sm border border-white/40">
              <h3 className="text-2xl font-bold text-black mb-4">
                Join Our Awareness Network
              </h3>
              <p className="text-lg text-black/70 mb-6 max-w-2xl mx-auto">
                Subscribe to receive educational materials, campaign toolkits, and updates 
                on upcoming community workshops and events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full border border-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
                />
                <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default AwarenessRaising;