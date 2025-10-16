import React from "react";

function OurApproach() {
  return (
    <div>
      <section id="approach" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-bold mb-6 text-green-700">
                Our Geospatial Climate Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Combining cutting-edge geospatial technologies with
                environmental science, we deliver actionable insights for
                climate resilience and sustainability.
              </p>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Geospatial Data Collection
                    </h3>
                    <p className="text-gray-600">
                      Leveraging Google Earth Engine and satellite data to
                      establish comprehensive environmental baselines and
                      identify critical areas.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Custom Analysis with QGIS & Python
                    </h3>
                    <p className="text-gray-600">
                      Developing tailored geospatial models and scripts to
                      analyze climate risks, carbon sequestration, and
                      sustainability metrics.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Interactive Dashboard Development
                    </h3>
                    <p className="text-gray-600">
                      Building user-friendly interfaces to visualize complex
                      climate data for better decision-making.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4 flex-shrink-0">
                    <span className="text-green-700 font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-800">
                      Ongoing Monitoring & Optimization
                    </h3>
                    <p className="text-gray-600">
                      Implementing automated GEE scripts for continuous
                      environmental monitoring and adaptive management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <img
                src="/geospatial-approach.jpg" // Consider using an image showing GEE/QGIS interfaces or maps
                alt="Geospatial climate analysis process"
                className="rounded-xl shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default OurApproach;