

export const Features = () => {
  return (
    <section>
        <div className="min-h-screen bg-white pt-40 px-6 text-gray-800">
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
  )
}
