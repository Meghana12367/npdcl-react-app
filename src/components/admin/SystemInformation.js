import React from 'react';

export const SystemInformation = () => {
  return (
    <div className="min-h-screen bg-green-50">
      <div className="max-w-6xl mx-auto p-6">
        {/* Simple Header */}
        <div className="bg-green-600 rounded-lg shadow-md p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <div className="text-2xl">ℹ️</div>
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2">System Information & Guidelines</h1>
                <p className="text-green-100">Comprehensive administrative documentation for NPDCL operations</p>
              </div>
            </div>
            <div className="text-right">
              <div className="bg-green-500 rounded-lg px-4 py-2">
                <span className="text-sm">Last Updated: January 22, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics - Simple Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-green-500">
            <div className="text-2xl font-bold text-green-700">99.5%</div>
            <div className="text-gray-600 text-sm">System Availability</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-blue-500">
            <div className="text-2xl font-bold text-blue-700">4 Hours</div>
            <div className="text-gray-600 text-sm">Max Restoration Time</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-purple-500">
            <div className="text-2xl font-bold text-purple-700">±5%</div>
            <div className="text-gray-600 text-sm">Voltage Regulation</div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-orange-500">
            <div className="text-2xl font-bold text-orange-700">2.5M+</div>
            <div className="text-gray-600 text-sm">Consumers Served</div>
          </div>
        </div>

        {/* Power Distribution Overview */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 mb-8">
          <div className="bg-green-50 p-6 border-b border-green-100">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">⚡</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Power Distribution Network Overview</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                The Northern Power Distribution Company Limited (NPDCL) operates one of the most extensive electrical distribution networks in the region, serving over 2.5 million consumers across residential, commercial, and industrial sectors.
              </p>
              <div className="bg-green-50 border-l-4 border-green-400 p-4 rounded-r">
                <p className="text-gray-800 font-medium">
                  Our distribution system operates at multiple voltage levels including 132 KV, 33 KV, and 11 KV transmission lines, with a total network length of approximately 15,000 kilometers.
                </p>
              </div>
              <p>
                Daily operations involve continuous monitoring of power generation, consumption patterns, and load distribution across different sectors.
              </p>
            </div>
          </div>
        </div>

        {/* Administrative Procedures */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-blue-500 mb-8">
          <div className="bg-blue-50 p-6 border-b border-blue-100">
            <div className="flex items-center">
              <div className="bg-blue-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">⚙️</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Administrative Procedures & Protocols</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <p className="text-base leading-relaxed">
                All administrative personnel are required to follow established protocols for system monitoring, maintenance scheduling, and emergency response procedures. Daily system checks must be completed by 9:00 AM.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-800 mb-2">🕒 Maintenance Schedule</h4>
                  <p className="text-sm text-gray-700">Preventive maintenance conducted quarterly for all major equipment</p>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-800 mb-2">🛡️ Emergency Response</h4>
                  <p className="text-sm text-gray-700">Response team deployment within 30 minutes of incident reporting</p>
                </div>
              </div>
              <p>
                Emergency response protocols require immediate notification of the control center for any equipment failures or power outages affecting more than 100 consumers.
              </p>
            </div>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-red-500 mb-8">
          <div className="bg-red-50 p-6 border-b border-red-100">
            <div className="flex items-center">
              <div className="bg-red-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">🛡️</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Safety Guidelines & Regulations</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <div className="bg-red-50 border border-red-200 rounded p-4">
                <div className="flex items-center mb-3">
                  <div className="text-red-600 text-lg mr-2">⚠️</div>
                  <h4 className="font-semibold text-red-800">Critical Safety Notice</h4>
                </div>
                <p className="text-red-700 font-medium">
                  All personnel must complete mandatory safety training annually and maintain valid certifications for working with electrical systems.
                </p>
              </div>
              <p className="text-base leading-relaxed">
                Personal protective equipment (PPE) including insulated gloves, safety helmets, and arc-flash protective clothing must be worn at all times when working near energized equipment.
              </p>
              <p>
                Environmental safety protocols require careful handling of transformer oils and immediate reporting of any oil spills or environmental incidents.
              </p>
            </div>
          </div>
        </div>

        {/* System Performance Standards */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 mb-8">
          <div className="bg-green-50 p-6 border-b border-green-100">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">📊</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">System Performance Standards</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-green-50 p-4 rounded border border-green-200">
                  <div className="text-green-600 text-2xl mb-2">🚀</div>
                  <div className="text-2xl font-bold text-green-800">99.5%</div>
                  <div className="text-sm text-gray-600">System Availability</div>
                </div>
                <div className="text-center bg-blue-50 p-4 rounded border border-blue-200">
                  <div className="text-blue-600 text-2xl mb-2">⏰</div>
                  <div className="text-2xl font-bold text-blue-800">4 Hours</div>
                  <div className="text-sm text-gray-600">Max Restoration Time</div>
                </div>
                <div className="text-center bg-purple-50 p-4 rounded border border-purple-200">
                  <div className="text-purple-600 text-2xl mb-2">⚡</div>
                  <div className="text-2xl font-bold text-purple-800">±5%</div>
                  <div className="text-sm text-gray-600">Voltage Regulation</div>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                NPDCL maintains stringent performance standards to ensure reliable power supply to all consumers. System availability must exceed 99.5% annually, with planned outages limited to 4 hours per month.
              </p>
              <p>
                Load forecasting and capacity planning are essential components of our operations, with annual load growth projections updated quarterly.
              </p>
            </div>
          </div>
        </div>

        {/* Consumer Service Standards */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-purple-500 mb-8">
          <div className="bg-purple-50 p-6 border-b border-purple-100">
            <div className="flex items-center">
              <div className="bg-purple-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">👥</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Consumer Service Standards</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <div className="flex items-start space-x-4 bg-purple-50 p-4 rounded border border-purple-200">
                <div className="bg-purple-500 rounded-full p-2 text-white">🎧</div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Multi-Channel Customer Support</h4>
                  <p className="text-gray-700">Available through online portals, mobile applications, call centers, and physical service centers</p>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                New connection requests are processed within 7 working days for residential consumers and 15 working days for commercial/industrial consumers.
              </p>
              <p>
                Consumer education programs are conducted regularly to promote energy conservation and electrical safety awareness.
              </p>
            </div>
          </div>
        </div>

        {/* Technology & Innovation */}
        <div className="bg-white rounded-lg shadow-sm border-l-4 border-green-500 mb-8">
          <div className="bg-green-50 p-6 border-b border-green-100">
            <div className="flex items-center">
              <div className="bg-green-500 rounded-full p-3 mr-4">
                <div className="text-white text-xl">💻</div>
              </div>
              <h2 className="text-2xl font-semibold text-gray-800">Technology & Innovation Initiatives</h2>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4 text-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <div className="text-green-600 text-2xl mb-3">🌐</div>
                  <h4 className="font-semibold text-green-800 mb-2">Smart Grid Technology</h4>
                  <p className="text-gray-700 text-sm">Advanced metering infrastructure with real-time monitoring capabilities</p>
                </div>
                <div className="bg-green-50 p-4 rounded border border-green-200">
                  <div className="text-green-600 text-2xl mb-3">🗺️</div>
                  <h4 className="font-semibold text-green-800 mb-2">GIS Integration</h4>
                  <p className="text-gray-700 text-sm">Geographic mapping for asset management and fault location</p>
                </div>
              </div>
              <p className="text-base leading-relaxed">
                NPDCL is actively investing in smart grid technologies to enhance system reliability and improve energy efficiency.
              </p>
              <div className="bg-green-600 text-white p-6 rounded">
                <h4 className="font-semibold mb-3 flex items-center">
                  <span className="mr-2">🚀</span>
                  Future Vision
                </h4>
                <p>
                  Future plans include deployment of distributed energy resources and integration of renewable energy sources to optimize load patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};