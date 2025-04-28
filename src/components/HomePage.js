import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate();

  const handleBillManagementClick = () => {
    navigate('/bill-management');
  }
  return (
    <div className="text-gray-800 bg-gray-100">

        <section
        className="relative bg-cover bg-center bg-no-repeat py-44 px-6 text-white"
        style={{
            backgroundImage: `url('https://plus.unsplash.com/premium_photo-1716603741770-376f718c9c9f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
        }}
        >
        
        <div className="absolute inset-0 bg-black opacity-60"></div>


        <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Welcome to the NPDCL Internal Electricity Portal</h2>
            <p className="text-lg text-gray-200">
            Monitor electricity usage, manage reports, and access your dashboards – all in one secure place.
            </p>
        </div>
        </section>

        <section className="py-10 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-green-700 mb-6">
            Powering a Sustainable Future
            </h2>
            <p className="mb-8 text-lg">
            We provide smart energy solutions and seamless electricity management to help you stay informed and in control.
            </p>
            <Link to="/about">
              <button className="inline-block bg-green-600 text-white px-6 py-3 mb-20  rounded-full shadow-lg hover:bg-green-700 transition underline">
                Learn More About Us
              </button>
            </Link>
        </div>
        </section>


        <section className="bg-white py-18 px-6" id="finance-services">
        <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-10">Our Finance Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">

            {/* Single Service Box */}
            <div 
              className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all cursor-pointer"
              onClick={handleBillManagementClick}
>
              <i className="bi bi-cash-stack text-3xl text-green-600 mb-4"></i>
              <h3 className="text-lg font-semibold">Bill Management</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-credit-card-2-back-fill text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Finance Dashboard</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-bank text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Budget Allocation</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-clipboard-data-fill text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Expenditure Reports</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-file-earmark-bar-graph text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Audit Logs</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-wallet-fill text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Fund Transfers</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-pie-chart-fill text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Revenue Analysis</h3>
            </div>

            <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition-all">
                <i className="bi bi-receipt-cutoff text-3xl text-green-600 mb-4"></i>
                <h3 className="text-lg font-semibold">Invoice Generation</h3>
            </div>
            </div>
        </div>
        </section>







        <section>
        <div className="min-h-screen bg-white pt-32 px-6 text-gray-800">
        <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-xl md:text-4xl font-extrabold text-green-700 mb-6">
          About Northern Power Distribution Company (NPDCL)
        </h1>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed">
          <span className="font-bold text-green-700">NPDCL</span> is committed to powering lives with safe, reliable,
          and efficient electricity distribution. We leverage cutting-edge digital infrastructure to ensure transparency,
          sustainability, and resilience in the energy sector. Our mission is to accelerate energy access while
          empowering data-driven decisions for better performance, accountability, and operational excellence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-activity text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Real-time Monitoring</h3>
              <p className="text-sm text-gray-600">
                Dynamic system tracking to ensure uninterrupted energy flow and grid stability.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-bar-chart-line text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Smart Analytics</h3>
              <p className="text-sm text-gray-600">
                Insightful dashboards help detect anomalies, forecast demand, and optimize resource usage.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-shield-check text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Secure Infrastructure</h3>
              <p className="text-sm text-gray-600">
                Enterprise-grade authentication and data protection for digital assets and records.
              </p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-globe-asia-australia text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Sustainability Focus</h3>
              <p className="text-sm text-gray-600">
                Aligning with clean energy goals to reduce carbon footprint and promote green practices.
              </p>
            </div>
          </div>

          {/* Feature 5 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-cpu text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Tech-Driven Operations</h3>
              <p className="text-sm text-gray-600">
                Seamless integration of IoT, automation, and data systems for smarter energy distribution.
              </p>
            </div>
          </div>

          {/* Feature 6 */}
          <div className="flex items-start gap-4">
            <i className="bi bi-people text-3xl text-green-600"></i>
            <div>
              <h3 className="text-lg font-semibold">Community Impact</h3>
              <p className="text-sm text-gray-600">
                Improving lives across regions through consistent service and responsive support systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </section>
    </div>
  );
};

export default HomePage;
