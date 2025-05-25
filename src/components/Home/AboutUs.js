import { Link } from 'react-router-dom';

export const AboutUs = () => {
  return (
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
  )
}
