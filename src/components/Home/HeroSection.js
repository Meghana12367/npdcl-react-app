

export const HeroSection = () => {
  return (
    <section
    className="relative bg-cover bg-center bg-no-repeat py-48 px-6 text-white"
    style={{
        height: 550,
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
  )
}
