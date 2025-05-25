// AboutUs.js
import React from 'react';

export const AboutPage = () => {
  return (
    
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-green-700 mb-6">Our Mission</h2>
              <p className="mb-4">
                Northern Power Distribution Company Limited (NPDCL) is committed to providing reliable, sustainable, 
                and affordable electricity services to homes and businesses across the northern region.
              </p>
              <p className="mb-4">
                We aim to revolutionize the power distribution sector through innovation, transparency, 
                and customer-centric approaches, ensuring energy security for all.
              </p>
              
              <h2 className="text-3xl font-bold text-green-700 mt-10 mb-6">Our Vision</h2>
              <p className="mb-4">
                To be the leading power distribution company known for operational excellence, 
                technological innovation, and commitment to sustainability.
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <h2 className="text-3xl font-bold text-green-700 mb-6">Company Facts</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Established</h3>
                <p>2000</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Area Served</h3>
                <p>Over 25,000 square kilometers across northern districts</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Consumer Base</h3>
                <p>Serving more than 5 million consumers</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Network</h3>
                <p>Managing over 100,000 km of distribution lines</p>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">Green Initiatives</h3>
                <p>Invested in 500+ MW of renewable energy sources</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Our Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">99.2% Uptime</h3>
                <p>Industry-leading reliability in power distribution</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">30% Reduction in Losses</h3>
                <p>Advanced technology implementation to minimize distribution losses</p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Green Energy Leader</h3>
                <p>40% of our distribution is from renewable energy sources</p>
              </div>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-green-700 mb-6">Leadership Team</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Rajesh Kumar</h3>
                <p className="text-gray-600">Managing Director</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Anita Sharma</h3>
                <p className="text-gray-600">Technical Director</p>
              </div>
              <div className="text-center">
                <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
                <h3 className="text-xl font-semibold">Vikram Singh</h3>
                <p className="text-gray-600">Finance Director</p>
              </div>
            </div>
          </div>
        </div>
      
      
    
  );
};

