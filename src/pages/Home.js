import { HeroSection } from "../components/Home/HeroSection";
import { AboutUs } from "../components/Home/AboutUs";
import { Services } from "../components/Home/Services";
import { Features } from "../components/Home/Features";



export const Home = () => {
  return (
    <div className="text-gray-800 bg-gray-100">
      <HeroSection />
      <AboutUs />
      <Services />
      <Features />
      </div>
  );
}



